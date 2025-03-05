"use client";
import React from "react";
import styles from "./signup.module.css";
import Button from "@/components/signin/Button";
import Input from "@/components/signin/Input";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const handelSignInRedirect = () => {
    router.push("/auth/sign-in");
  };
  return (
    <div className={styles.signinWrapper}>
      <div className={styles.signinContainer}>
        <h2 className={styles.title}>ثبت نام کنید</h2>
        <div className={styles.inputWrapper}>
          <Input label="نام و نام خانوادگی" type="text" autoComplete="off" />
        </div>
        <div className={styles.inputWrapper}>
          <Input label="نام کاربری" type="text" autoComplete="off" />
        </div>
        <div className={styles.inputWrapper}>
          <Input label="ایمیل" type="email" autoComplete="off" />
        </div>
        <div className={styles.inputWrapper}>
          <Input label="رمز عبور" type="password" autoComplete="off" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="ورود" onClick={handelSignInRedirect} />
        </div>
        <p className={styles.footer}>
          قبلا ثبت نام کرده اید؟ <a href="/auth/sign-in">وارد شوید!</a>
        </p>
      </div>
    </div>
  );
}
