---
id: cloud-resume-multicloud
title: "Cloud Resume Challenge - Multi Cloud (AWS & Azure)"
subtitle: "Infrastructure as Code | Serverless | CI/CD"
year: "2025"
status: in-progress
featured: true
excerpt: "Built a fully serverless resume website with visitor counter"
technologies: "AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, Route 53, ACM), Terraform, Python, GitHub Actions"
githubUrl: "https://github.com/fazabillah/cloud-resume-challenge"
liveUrl: null
---

## Summary

Built a fully serverless resume website with visitor counter, demonstrating end-to-end cloud engineering capabilities.

## Key Features

- **Frontend:** Static website (HTML/CSS/JS) hosted on S3, distributed via CloudFront with custom domain and SSL/TLS certificate
- **Backend:** Python Lambda function with DynamoDB for visitor counter, exposed via API Gateway
- **IaC:** Complete infrastructure provisioned using Terraform with modular, reusable code
- **CI/CD:** Automated deployment pipeline using GitHub Actions for both frontend and backend
- **Testing:** Implemented Python unit tests and integration tests for Lambda function

## Architecture

Frontend hosted on S3 with CloudFront distribution. Backend serverless Lambda with DynamoDB. API Gateway for REST endpoints.

## Challenges

Implementing visitor counter with DynamoDB, setting up CI/CD with GitHub Actions.

## Key Learnings

Serverless architecture benefits, Infrastructure as Code best practices.
