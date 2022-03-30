<template>
    <section class="sign-up-page">        
        <div class="form-container text-center">
            <form  @submit.prevent="submit" class="flex flex-col">
                <h1>Sign Up</h1>
                <input type="text" class="form-group" placeholder="username..." v-model="username"  />
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
import router from '../router';
import { defineComponent } from 'vue';

export default defineComponent({
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            username: '',
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
            const USER = 
            { 
                'email': this.email, 
                'password': this.password 
            };
                    
            localStorage.setItem('user', JSON.stringify(USER)); 
            this.$router.push("/sign-in")           
        }
    },    
    validations () {
        return {
            username: { required }, 
            email: { required, email },
            password: { required }
        }
    },
    name: 'SignUpView',
    props: {
        msg: String,
    },
});
</script>