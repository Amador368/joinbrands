<template>
    <section class="sign-up-page">        
        <div class="form-container text-center">
            <form  @submit.prevent="submit" class="flex flex-col">
                <h1>Sign In</h1>                
                <input type="email" class="form-group" placeholder="email..." v-model="email"  />
                <input type="password" class="form-group" placeholder="password..." v-model="password"  />
                <button type="submit" class="btn btn-submit bg-green-500 rounded-sm p-2 m-1">
                    Submit
                </button>
            </form>
        </div>
    </section>
</template>
<style lang="scss">
    input {
        color: black;
        caret-color: green;
        outline: none;
        border: 1px solid black;        
        font-size: 20px;
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.3em;
    }
    .form-container {
        max-width: 500px;
        margin: 0 auto;
        text-align: left;
    }
    .btn-submit {
         border-radius: 50px;
        font-size: 20px;
        margin: 1rem;
    }
</style>
<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { defineComponent } from 'vue';

export default defineComponent({
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {            
            email: '',
            password: '',        
        }
    },
    methods: {        
        async submit () {
            const result = await this.v$.$validate()
            if (!result) {                
                console.log("invalid")
                return
            }            
            interface User {
                email: string;
                password: string;
            }
       
            
            let user = localStorage.getItem('user');
            if(user ) {
                var retrievedUser = JSON.parse(user);
                const USER: User = {
                        email: retrievedUser.email,
                        password: retrievedUser.password,
                };                
                if ( this.email == USER.email && this.password == USER.password){
                    this.$router.push("/profile")
                }
            }            
            this.$router.push("/lost-password");
        }
    },    
    validations () {
        return {            
            email: { required, email },
            password: { required }
        }
    },
    name: 'SignInView',
    props: {
        msg: String,
    },
});
</script>