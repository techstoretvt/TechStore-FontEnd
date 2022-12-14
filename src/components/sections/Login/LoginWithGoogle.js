

const LoginGoogle = () => {
    return (
        <div>
            <div id="g_id_onload"
                data-client_id="YOUR_CLIENT_ID"
                data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard"></div>
        </div>
    )
}
export default LoginGoogle