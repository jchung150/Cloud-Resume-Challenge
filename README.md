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

### Discovering the Cloud-Resume-Challenge

To address this gap, I began looking for projects to gain hands-on experience. While browsing the internet, I came across the "Cloud-Resume-Challenge," a project created by Forest Brazeal. This project was an excellent fit for me, especially since I needed to create a resume for my upcoming Co-op opportunity. Eager to engage, I soon found that the challenge was more difficult than I had initially anticipated. Forest deliberately provided limited instructions to encourage students to stretch their skills.

### Building the Static Website
My initial step was to create a static website for my resume using Next.js and Tailwind CSS. It took me some time to fully grasp the concept of a 'static website.

### Domain Registration and Web Hosting
I purchased my domain (juanchung.net) from Namecheap, a domain name registrar, and hosted the site on AWS S3. I also integrated it with DNS and CloudFront, AWS's CDN service.

### First Hurdle: SSL/TLS Certificate
The first hurdle was acquiring an SSL/TLS certificate for HTTPS communication. Initially, I attempted to secure the certificate via Amazon Certificate Manager (ACM), but encountered several setbacks. Eventually, I acquired it from the external site, Namecheap, where I had originally purchased my domain.

### Backend Development: Lambda and DynamoDB
The backend part of the challenge was lots of fun. I created an AWS Lambda Function in Python and a DynamoDB table to count and save the number of visitors. I also set up a CloudWatch alarm to prevent incidents that could crash my Lambda function.

### Overcoming CORS: The Second Hurdle
The second hurdle I encountered involved resolving a Cross-Origin Resource Sharing (CORS) issue. Due to the Same-Origin Policy, the browser imposed security restrictions on unauthorized cross-origin requests. I spent days solving this problem and ultimately fixed it by adding 'Access-Control-Allow-Origin' directly in the return part of my Lambda function.

### Achieving Continuous Integration and Continuous Deployment (CI/CD)
At this stage of the challenge, I was finally able to host my website securely on AWS under my chosen domain name. However, the challenge was not yet complete. The remaining tasks focused on Continuous Integration (CI) and Continuous Deployment (CD). I found the CI/CD process particularly engaging. I set up a GitHub Actions workflow that allowed for a seamless CI/CD pipeline, where changes were automatically tested and uploaded to AWS S3. In addition, I provisioned AWS infrastructure using Terraform. My strategy was to leverage each tool according to its strengths: Terraform for infrastructure management and GitHub Actions for build and deployment.

### Concluding Thoughts: A Rewarding Experience
After completing the challenge, I can confidently say that it ranks among the best projects I've undertaken. Though the experience was challenging, it proved to be immensely educational and provided me with invaluable insights into Cloud Services and a variety of supporting tools.

## Screenshots

<img width="225" alt="resume_screenshot_01" src="https://github.com/jchung7v/mywebsite2/assets/111412548/81cc59c4-639f-4678-8e52-eaf3956bd49a">
<img width="225" alt="resume_screenshot_02" src="https://github.com/jchung7v/mywebsite2/assets/111412548/39bec2e9-cee9-4eb0-9bde-6b28634e6257">
<img width="225" alt="resume_screenshot_03" src="https://github.com/jchung7v/mywebsite2/assets/111412548/76023c24-0b66-4b6c-b595-7ecbc00838c3">

## Technology Used

![Next JS](https://img.shields.io/badge/Next^13.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss^3.3.2-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Setup and Usage

- To be determined (TBD)

## Bugs and Limitations

- To be determined (TBD)

## Future Features

- To be determined (TBD)

## Project Structure

### Top-Level Directory
```
.
├── .github/workflows                   # Contains GitHub Actions workflows for CI/CD automation
├── .cypress                            # Stores Cypress testing scripts and configuration
├── .infrastructure                     # Stores Terraform configuration files for infrastructure as code (IAC)
├── .node_modules                       # Node.js dependencies and libraries
├── .pages                              # Stores the source code files for individual web pages
├── .public                             # Stores static assets
├── .styles                             # Contains global CSS styling files
├── .gitignore                          # Contains gitignore file
├── .README.md                          # Project documentation and usage guide
├── .cypress.config.js                  # Configuration file for Cypress testing
├── .jsconfig.json                      # Configuration file for JS 
├── .next.config.js                     # Configuration file for Next.js framework
├── .package-lock.json                  # Locks down versions of package dependencies
├── .package.json                       # Package dependencies
├── .postcss.config.js                  # Configuration file for PostCSS
└── .tailwind.config.js                 # Configuration file for Tailwind CSS
```

<!-- ## References -->
## Licence
[MIT Licence](https://www.mit.edu/~amini/LICENSE.md)
