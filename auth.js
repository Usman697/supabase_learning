let signupEmail = document.getElementById('signup_email')
let signupPass = document.getElementById('signup_password')
let signupBtn = document.getElementById('signup-btn')
let signupBtnLoader = document.getElementById('loading_btn_spinner')

let loginBtn = document.getElementById('login_btn')
let loginEmail = document.getElementById('login_email')
let loginPass = document.getElementById('login_password')

let sessionBtn = document.getElementById('session_btn')

let logoutBtn = document.getElementById('logout_btn')
let signupnumber = document.getElementById("signup_number")

async function signup() {
    try {
     signupBtnLoader.style.display = 'block'

        const { data, error } = await supabase.auth.signUp({
            phone: signupnumber.value,
            password: signupPass.value,
            options: {
              channel: 'whatsapp'
            }
          })
          if(error) throw error 
          if(data) {
              alert('Please Check your mobile phone sms for confirmation')
          }
          return data
          
        
    } catch (error) {
        alert(error)
        console.log(error)
        
    }
    finally{
   signupBtnLoader.style.display = 'none'

    }
      }
      




//       async function signup() {
//   try {
//     signupBtnLoader.style.display = 'block'
//     const { data, error } = await supabase.auth.signUp({
//         email: signupEmail.value,
//         password: signupPass.value,
//       })

//     if(error) throw error 
//     if(data) {
//         alert('Please Check your email for confirmation')
//     }
//     return data
//   } catch (error) {
//     console.log(error)
//   } finally {
//     signupBtnLoader.style.display = 'none'
//   }
      
// }

async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          })

          if(error) throw error
          if(data) {
            console.log(data)
            alert('Sign in Succesfull')
          }
          return data
    } catch (error) {
            console.log(error)

            alert(error.message)
    }
}



async function checkSession(){
    try {
        const { data, error } = await supabase.auth.getSession()
        if(data) {
            console.log(data)
        } 
        if(error) throw error
    } catch (error) {
        console.log(error)
    }
}


async function logout() {
    try {
        const { error } = await supabase.auth.signOut()
        if(error) throw error
    } catch (error) {
    console.log(error)        
    }
}


//sessionBtn.addEventListener('click' , checkSession)
signupBtn.addEventListener('click' , signup)


//logoutBtn.addEventListener('click' , logout)