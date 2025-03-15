"use client";
import React from "react";
import styles from "./signin.module.css";
import Button from "@/components/signin/Button";
import Input from "@/components/signin/Input";
import { useRouter } from "next/navigation";


const SignInForm = () => {
    const router = useRouter();
    const handleSignInClick = () => {
      router.push("/dashboard");
    };
  return (
   
        <div className={styles.signinWrapper}>
      <div className={styles.signinContainer}>
        <h2 className={styles.title}>اطلاعات خود را وارد کنید</h2>
        <div className={styles.inputWrapper}>
        <Input label="نام کاربری" type="text" autoComplete="username" />
        </div>
        <div className={styles.inputWrapper}>
        <Input label="رمز عبور" type="password" autoComplete="current-password" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="ورود" onClick={handleSignInClick} />
        </div>
        <p className={styles.footer}>
          قبلا ثبت نام نکرده‌اید؟ <a href="/auth/sign-up">ثبت‌نام کنید!</a>
        </p>
      </div>
    </div>
  )
}

export default SignInForm