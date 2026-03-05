This project uses a multi stage YAML pipeline to implement a CI/CD process for a Node.js application. 
Pipeline Flow is as follows:
1.	Trigger and PR Validation
•	Pipeline triggers automatically during a commit or pull with target as the master branch. Direct commits to master are blocked using  branch policy.
•	Every PR must pass CI validation before it can be merged.

2.	CI
•	Install dependencies using npm ci and runs tests and a build step.
•	A pipeline artifact is published and the same build output is also published as a Universal Package to Azure Artifacts

3.	Deploy to Dev
•	Automatically deploys published Artifact to Dev environment. 
•	This ensures that the artifact is reused without rebuilding.

4.	Deploy to UAT
•	Deploys to UAT environment which is reviewed by manual approval.

This pipeline enforces PR based governance, automates build and deployment using YAML, securely manages secrets and provides full traceability through logs and approvals making it suitable for real enterprise delivery.