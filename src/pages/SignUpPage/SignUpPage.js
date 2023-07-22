import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {signUpFormValidator} from "../../validators/SignUp.form.validator";
import {Link} from "react-router-dom";

import profileIcon from './images/profile-icon.png';
import emailIcon from './images/email-icon.png';
import passwordIcon from './images/password-icon.png';
import '../../components/reset.css';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
    } = useForm({
        resolver: joiResolver(signUpFormValidator),
        mode: 'all',
    });

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    console.log(errors)

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <span className={styles.toDo_span}> To Do </span>
                        <span className={styles.list_span} data-text='List'> List </span>
                    </div>
                    <span className={styles.signUp_span}>SIGN UP</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="#">
                    <div className={styles.inputs}>
                        <div className={styles.block_input}>
                            <img src={profileIcon} alt="profile icon"/>
                            <div className={styles.errorContainer}>
                                <input
                                    className={styles.input}
                                    placeholder="Username"
                                    {...register('username')}
                                    autoComplete='off'
                                />
                                {
                                    errors.username && <span className={styles.error}> {errors.username.message} </span>
                                }
                            </div>
                        </div>
                        <div className={styles.block_input}>
                            <img src={emailIcon} alt="profile icon"/>
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
                        <Link to="/">
                        <p className={styles.signIn}> Do you have an account? </p>
                        </Link>
                    </div>
                    <button
                        disabled={!isValid}
                        className={styles.button}
                        type="submit"
                    > Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;