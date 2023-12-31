import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {SignInFormValidator} from "../../validators/SignIn.form.validator";
import {Link} from "react-router-dom";

import user from './images/user-top.png';
import profileIcon from './images/profile-icon.png';
import passwordIcon from './images/password-icon.png';
import '../../components/reset.css';
import styles from './SignInPage.module.css';

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        resolver: joiResolver(SignInFormValidator),
        mode: 'all',
    });

    const onSubmit = (data) => {
        console.log(errors)
        console.log(data)
    }

    return (
        <div className={styles.signInContainer}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <span className={styles.toDo_span}> To Do </span>
                        <span className={styles.list_span} data-text='List'> List </span>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} name="sign-in-form" action="#">
                    <img className={styles.userTop} src={user} alt=""/>
                    <div className={styles.inputs}>
                        <div className={styles.block_input}>
                            <img src={profileIcon} alt="profile icon"/>
                            <div className={styles.errorContainer}>
                                <input
                                    className={styles.input}
                                    placeholder="Email"
                                    {...register('email')}
                                    autoComplete='off'
                                />
                                {
                                    errors.email && <span className={styles.error}> {errors.email.message} </span>
                                }
                            </div>
                        </div>
                        <div className={styles.block_input}>
                            <img src={passwordIcon} alt="password icon"/>
                            <div className={styles.errorContainer}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    placeholder="Password"
                                    {...register('password')}
                                    autoComplete='off'
                                />
                                {
                                    errors.password && <span className={styles.error}> {errors.password.message} </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to='/sign-up'>
                            <p className={styles.signUp}>Don`t have an account?</p>
                        </Link>
                    </div>
                    <Link to='/todo'>
                        <button
                            disabled={!isValid}
                            className={styles.button}
                            type="submit"
                        >Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;