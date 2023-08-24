# Cloud-Resume-Challenge

This is my static online resume utilizing Next.js and Tailwind CSS, hosted securely on Amazon Web Services.

<a href="https://juanchung.net">See My Resume</a>
<a href="/">Report Bug</a>

## High Level Design of AWS Services

<img width="690" alt="resume_screenshot_aws" src="https://github.com/jchung7v/mywebsite2/assets/111412548/6a500ed3-84cf-4ca5-a837-9f97a3ef7ef4">

![Next JS](https://img.shields.io/badge/Next^13.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss^3.3.2-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Python](https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=AWS&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=AWS&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Description

As the summer of 2023 got underway, I set a goal to earn at least two AWS Cloud Certificates. However, after successfully obtaining the first one, a question arose within me: "If clients ask me to host their website on AWS, can I confidently say I have the requisite knowledge and skills?" The answer was "No."

To address this gap, I began looking for projects to gain hands-on experience. While browsing the internet, I came across the "Cloud-Resume-Challenge," a project created by Forest Brazeal. This project was an excellent fit for me; I needed to create a resume for my upcoming Co-op opportunity anyway, so I eagerly took on the challenge.

The challenge was more difficult than I had anticipated. Forest deliberately provided limited instructions to encourage students to stretch their skills.

My initial step was to create a static website for my resume using Next.js and Tailwind CSS. Understanding what 'static website' truly meant took some time.

I purchased my domain from Namecheap, a domain name registrar, and hosted the site on AWS S3. I also integrated it with DNS and CloudFront, AWS's CDN service.

The first hurdle was acquiring an SSL/TLS certificate for HTTPS communication. Initially, I tried to obtain the certificate through Amazon Certificate Manager (ACM), but faced multiple setbacks. Eventually, I acquired it from Namecheap, where I had originally purchased my domain.

The backend part of the challenge was lots of fun. I created AWS Lambda Function and Dynamodb table to count and save the number of visitors. Although my coding experience with Python was short, I found it very straightforward in...



## Screenshots

<img width="225" alt="resume_screenshot_01" src="https://github.com/jchung7v/mywebsite2/assets/111412548/81cc59c4-639f-4678-8e52-eaf3956bd49a">
<img width="225" alt="resume_screenshot_02" src="https://github.com/jchung7v/mywebsite2/assets/111412548/39bec2e9-cee9-4eb0-9bde-6b28634e6257">
<img width="225" alt="resume_screenshot_03" src="https://github.com/jchung7v/mywebsite2/assets/111412548/76023c24-0b66-4b6c-b595-7ecbc00838c3">

## Technology Used

## Setup and Usage

## Bugs and Limitations

## Future Features

## Project Structure

## References

## Licence
[MIT Licence](https://www.mit.edu/~amini/LICENSE.md)
