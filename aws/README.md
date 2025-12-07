## Using CloudFormation (CFN)
other options of IaC:
- CDK
- Terraform

For this AWS, will use CFN for simplicity.

## Install Ansible

Full guide to [Deploy Ansible](./ANSIBLE_DEPLOYMENT_GUIDE.md)

### Install pipx
```
python3 -m pip install --user pipx
python3 -m pipx ensurepath
source ~/.zshrc
```
### Install Ansible
```
pipx install boto3 botocore
pipx install --include-deps ansible
ansible-galaxy collection install amazon.aws
```

#### Common ansible command
```
ansible-playbook -i deploy.yaml --ask-vault-pass
ansible-vault edit vaults/prod.yaml
ansible-vault view vaults/prod.yaml
ansible-vault rekey vaults/prod.yaml
```
### Ansible Deployment Fix

Probably error due to isolated Python envinronment Ansible
inject boto3 and botocore in Ansible env.
```
pipx inject ansible boto3
pipx inject ansible botocore
```

Note: make sure your bucket name in deploy.yaml file is unique!
