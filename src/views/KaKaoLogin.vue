<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()" >
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email',
                success: this.getKakaoAccount
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success(res) {
                    const kakaoAccount = res.kakao_account;
                    const nickName = kakaoAccount.profile_nickname;
                    const email = kakaoAccount.email;
                    console.log('nickname', nickName);
                    alert('login ok');
                },
                fail(error) {
                    console.log(error);
                }
            });
        },
        kakaoLogout() {
            window.Kakao.Auth.logout({
                success: console.log('logout')
            });
        }
    }
};
</script>
