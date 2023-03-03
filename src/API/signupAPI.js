import axios from "axios";

export const TodoSignUp = (data) => {
   return axios.post('http://localhost:8000/user/signup/', data)
      .then((res) => {
         console.log(res)
         // localStorage.setItem('error', res.data.serializers.ValidationError);
         // localStorage.getItem('error');
      })
      .catch((err) => {
         localStorage.setItem("signup error", JSON.stringify(err.response.data['non_field_errors'] ||
            err.response.data['user_id'] || err.response.data['user_pw']))
         console.log(localStorage.getItem('signup error'))
      })
}