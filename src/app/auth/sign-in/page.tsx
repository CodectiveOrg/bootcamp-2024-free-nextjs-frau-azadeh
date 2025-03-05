"use client";
import React from "react";
import styles from "./signin.module.css";
import Button from "@/components/signin/Button";
import Input from "@/components/signin/Input";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  
  const handleSignInRedirect = () => {
    router.push("/auth/dashboard");
  };

  return (
    <div className={styles.signinWrapper}>
      <div className={styles.signinContainer}>
        <h2 className={styles.title}>اطلاعات خود را وارد کنید</h2>
        <div className={styles.inputWrapper}>
          <Input label="نام کاربری" type="text" autoComplete="off" />
        </div>
        <div className={styles.inputWrapper}>
          <Input label="رمز عبور" type="password" autoComplete="off" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="ورود" onClick={handleSignInRedirect} />
        </div>
        <p className={styles.footer}>
          قبلا ثبت نام نکرده‌اید؟ <a href="/auth/sign-up">ثبت‌نام کنید!</a>
        </p>
      </div>
    </div>
  );
}
