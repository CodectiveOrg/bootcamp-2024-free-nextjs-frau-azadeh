'use client';

import React, { useState } from 'react';
import styles from './FAQsAndReviews.module.css';
import ReviewsSlider from '../review/ReviewsSlider';

interface FAQ {
  question: string;
  answer: string;
}

const FAQsAndReviews: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: 'دیابت چیست و انواع آن کدامند؟',
      answer:
        'دیابت یک بیماری مزمن است که در آن سطح قند خون (گلوکز) بالا می‌رود. دیابت به دو نوع اصلی تقسیم می‌شود: دیابت نوع ۱ (وابسته به انسولین) و دیابت نوع ۲ (غیر وابسته به انسولین).',
    },
    {
      question: 'چه علائمی ممکن است نشان‌دهنده دیابت باشد؟',
      answer:
        'علائم دیابت شامل تشنگی زیاد، تکرر ادرار، خستگی، کاهش وزن بدون دلیل، و تاری دید می‌باشد.',
    },
    {
      question: 'چگونه می‌توان دیابت را مدیریت کرد؟',
      answer:
        'مدیریت دیابت شامل کنترل رژیم غذایی، ورزش منظم، مصرف داروهای تجویز شده و بررسی منظم سطح قند خون است.',
    },
    {
      question: 'آیا دیابت درمان دارد؟',
      answer:
        'در حال حاضر دیابت درمان قطعی ندارد، اما با مدیریت صحیح می‌توان از عوارض آن پیشگیری کرد و زندگی سالمی داشت.',
    },
  ];

  return (
    <div className={styles.container}>
      {/* بخش سوالات متداول */}
      <div className={styles.faqs}>
        <h2 className={styles.title}>سوالات متداول در مورد دیابت</h2>
        <p className={styles.description}>
          در اینجا به برخی از سوالات پرتکرار درباره دیابت پاسخ داده‌ایم.
        </p>
        <ul className={styles.list}>
          {faqs.map((faq, index) => (
            <li key={index} className={styles.faq}>
              <div
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQsAndReviews;
