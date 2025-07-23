# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


- Deployment of frontend
-- Login On AWS
-- Launch EC2
-- set key pair 
-- connect on your terminal 
-- chmod 400 <secrete.key> dowloads/secreteKwy.pem
-- ssh -i "DevMatch-secrete.pem" ubuntu@ec2-13-127-120-213.ap-south-1.compute.amazonaws.com
-- install same version of node => (nvm install v23.11.0) not other version throw errors 

   - Frontend Deployement 
   -- npm i => install all dependancies of project 
   -- now run => npm run build => to build project compile file
   -- sudo apt update
   -- sudo apt install nginx
   -- start ngnix server =>  sudo systemctl start nginx and 
   -- enable nginx => sudo systemctl enable nginx
   -- copy of dist(code file ) into nginx http server => /var/www/html
   -- scp -r dist/* /var/www/html
   -- expose or enable port no:80 for run nginx server on http => on my instance
    
