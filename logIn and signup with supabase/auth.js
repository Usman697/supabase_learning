let signupEmail = document.getElementById('email')
let signuppass = document.getElementById('password')
let signupbtn = document.getElementById('signup-btn')




async function signup() {
    try {
      signupBtnLoader.style.display = 'block'
      const { data, error } = await supabase.auth.signUp({
          email: signupEmail.value,
          password: signupPass.value,
        })
  
      if(error) throw error 
      if(data) {
          alert('Please Check your email for confirmation')
      }
      return data
    } catch (error) {
      console.log(error)
    } finally {
     window.location.href = '/login.html'
  
      signupBtnLoader.style.display = 'none'
    }
        
  }



  signupBtn.addEventListener('click' , signup)
