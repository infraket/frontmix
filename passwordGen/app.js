Vue.createApp({
    data() {
      return {
        password: ""
      }
    },
    methods: {
        generatePassword() {
            var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            this.password = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                this.password += charset.charAt(Math.floor(Math.random() * n));
                }
            return this.password;
          
        }
    
      }
  }).mount('#basic-event')

  
  
       
  
  