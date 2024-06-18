import CryptoJS from 'crypto-js';

const APPID = 'd0c7f085';
const API_SECRET = 'MmFiNjFhODZkY2E5OGMxYTI0YzE2YjA4';
const API_KEY = '20330a21121c849e5db909f957932441';

export default {
  data() {
    return {
      status: 'init',
      ttsWS: null,
      totalRes: '',
      userInput: '',
    };
  },
  methods: {
    getWebsocketUrl() {
      return new Promise((resolve, reject) => {
        const apiKey = API_KEY;
        const apiSecret = API_SECRET;
        const url = 'wss://spark-api.xf-yun.com/v2.1/chat';
        const host = window.location.host;
        const date = new Date().toGMTString();
        const algorithm = 'hmac-sha256';
        const headers = 'host date request-line';
        const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2.1/chat HTTP/1.1`;
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
          app_id: APPID,
          uid: 'fd3f47e4-d',
        },
        parameter: {
          chat: {
            domain: 'generalv2',
            temperature: 0.5,
            max_tokens: 1024,
          },
        },
        payload: {
          message: {
            text: [
              {
                role: 'user',
                content: this.userInput,
              },
            ],
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
      console.log(resultData);
      this.totalRes += resultData;

      //   this.$refs.outputText.value = this.totalRes;
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
