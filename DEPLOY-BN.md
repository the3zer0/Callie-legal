# Callie Legal Website — বাংলা Setup Guide

এই ZIP-এ Callie / Istition BD-এর জন্য Premium Static Legal Website তৈরি আছে। কোনো Database, Token বা Backend লাগে না।

## Publish করার আগে

1. সব HTML ফাইলে `REPLACE_WITH_PUBLIC_CONTACT_EMAIL` লেখা **নিজের Public Support Email** দিয়ে বদলাবে। VS Code-এ `Ctrl + Shift + H` চেপে একসঙ্গে Replace All করো। ব্যক্তিগত ইমেইল প্রকাশ করতে না চাইলে আলাদা Business Email ব্যবহার করো।
2. Privacy Policy, Terms এবং Data Deletion-এর সব কথা ব্যবসার বাস্তব পদ্ধতির সঙ্গে মেলে কি না পড়ে দেখো। Data Deletion Request কেউ সত্যিই গ্রহণ ও Process করতে পারবে কি না নিশ্চিত করো।
3. `.private`, `.env`, API Token, Database, Customer Message—কিছুই GitHub-এ Upload করবে না। এই ZIP-এ সেগুলো নেই।

## GitHub Pages Setup

1. GitHub-এ নতুন Public Repository `callie-legal` তৈরি করো।
2. Extract করা ফোল্ডারের **ভেতরের ফাইল ও ফোল্ডার** Repo Root-এ Upload করো, যাতে `index.html` সরাসরি Root-এ থাকে।
3. Repository `Settings → Pages → Deploy from a branch → main → /(root) → Save`।
4. কিছুক্ষণ পর Public URL খুলে Incognito Window-এ Privacy, Terms ও Data Deletion তিনটি Page পরীক্ষা করো। বাংলা/English Toggle-ও দেখো।
5. URL-এর Example: `https://the3zer0.github.io/callie-legal/privacy-policy/` — কেবল তোমার GitHub Username `the3zer0` ও Repo `callie-legal` হলে এমন হবে। Live হওয়ার আগে Meta-তে এই URL বসাবে না।

## Meta Basic Settings

- Privacy Policy URL → `https://YOUR-USERNAME.github.io/callie-legal/privacy-policy/`
- Terms URL → `https://YOUR-USERNAME.github.io/callie-legal/terms-of-service/`
- Data deletion instructions URL → `https://YOUR-USERNAME.github.io/callie-legal/data-deletion/`

Meta-তে এগুলো দিলেই App Publish হওয়া নিশ্চিত নয়। Messenger, Instagram ও WhatsApp Review/Verification আলাদাভাবে লাগতে পারে।
