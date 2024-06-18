<template>
  <div>
    <input type="text" v-model="userInput" ref="inputText" />
    <button @click="start">开始连接</button>
    <textarea ref="outputText"></textarea>
  </div>
</template>

<script>
  import CryptoJS from 'crypto-js';

  export default {
    data() {
      return {
        appId: '写入自己appid',
        status: 'init',
        ttsWS: null,
        totalRes: '',
        userInput: '',
      };
    },
    methods: {
      getWebsocketUrl() {
        return new Promise((resolve, reject) => {
          const apiKey = '写入自己的apikey';
          const apiSecret = '写入自己的apiSecret';
          const url = 'wss://spark-api.xf-yun.com/v1.1/chat';
          const host = window.location.host;
          const date = new Date().toGMTString();
          const algorithm = 'hmac-sha256';
          const headers = 'host date request-line';
          const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
          const signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
          const signature = CryptoJS.enc.Base64.stringify(signatureSha);
          const authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
          const authorization = window.btoa(authorizationOrigin);
          const finalUrl = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
          console.log(finalUrl);
          resolve(finalUrl);
        });
      },
      setStatus(status) {
        this.status = status;
      },
      connectWebSocket() {
        this.setStatus('ttsing');
        this.getWebsocketUrl().then((url) => {
          let ttsWS;
          if ('WebSocket' in window) {
            ttsWS = new WebSocket(url);
          } else if ('MozWebSocket' in window) {
            ttsWS = new MozWebSocket(url);
          } else {
            alert('浏览器不支持WebSocket');
            return;
          }
          this.ttsWS = ttsWS;
          ttsWS.onopen = (e) => {
            this.webSocketSend();
          };
          ttsWS.onmessage = (e) => {
            this.result(e.data);
          };
          ttsWS.onerror = (e) => {
            clearTimeout(this.playTimeout);
            this.setStatus('error');
            alert('WebSocket报错，请f12查看详情');
            console.error(`详情查看：${encodeURI(url.replace('wss:', 'https:'))}`);
          };
          ttsWS.onclose = (e) => {
            console.log(e);
          };
        });
      },
      webSocketSend() {
        const params = {
          header: {
            app_id: this.appId,
            uid: 'fd3f47e4-d',
          },
          parameter: {
            chat: {
              domain: 'general',
              temperature: 0.5,
              max_tokens: 1024,
            },
          },
          payload: {
            message: {
              text: [],
            },
          },
        };
        console.log(JSON.stringify(params));
        this.ttsWS.send(JSON.stringify(params));
      },
      start() {
        this.totalRes = '';
        this.connectWebSocket();
      },
      result(resultData) {
        let jsonData = JSON.parse(resultData);
        this.totalRes += resultData;
        this.$refs.outputText.value = this.totalRes;
        if (jsonData.header.code !== 0) {
          alert(`提问失败: ${jsonData.header.code}:${jsonData.header.message}`);
          console.error(`${jsonData.header.code}:${jsonData.header.message}`);
          return;
        }
        if (jsonData.header.code === 0 && jsonData.header.status === 2) {
          this.ttsWS.close();
          this.setStatus('init');
        }
      },
    },
  };
</script>
