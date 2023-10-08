import GoogleIcon from "../assets/images/Google.svg"
import FacebookIcon from "../assets/images/Facebook.svg"
import TwitterIcon from "../assets/images/Twitter.svg"
import GithubIcon from "../assets/images/Gihub.svg"

export const socialIcons = () => {
       return [
              GithubIcon,
              FacebookIcon,
              TwitterIcon,
              GoogleIcon
       ]
}


export function setLocalStorageItems(data: any) {
       localStorage.setItem("token", data.loginUser.token);


}
     

export function logoutUser() {
       localStorage.removeItem("token");
       location.reload();
       window.location.href = "/login";
       console.log("Am trying to log out", localStorage.removeItem("token"));
}
     


