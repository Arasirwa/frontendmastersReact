# React 

## Useful codes for development

### NPM

To initialize npm use, this is to keep track for our dependancies. ``` npm init -y ```

### Prettier

Prettier is a tool that helps in formatting the code to use it run this code ``` npm i -D prettier@2.7.1 ``` add this line to your scripts  ``` "format": "prettier --write \"src/**/*.{js, jsx. ts, tsx}\"" ``` to use this, run this command on your terminal ``` npm run format ```

### Eslint

This is a that helps in evading javascript problems to use it run this code ``` npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0 ``` to set up the eslint configuration, create an ``` eslintrc.json ``` file and write the configuration as in this repository. install the eslint extension.
Add this line to your package json file under scripts ``` "lint": "eslint \"src/**/*.{js, jsx, ts, tsx}\" --quite" ```, to use it you can run eslint with the following command ``` npm run eslint ```, it can also fix some problems using the following commands ``` eslint -- --debug ``` to check issues, and then use the following command to fix some problems ``` eslint -- --fix ```

When using hooks run the following command ``` npm i -D eslint-plugin-react-hooks@4.6.0 ```  and update the json file

### Vite

To initate Vite, run the following command to configure your application ``` npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0 ```, configure your application as i have done on the ``` vite.config.js ``` file, then add the following lines to your package.json, under the scripts directors ```"dev": "vite",,
    "build": "vite build",
    "preview": "vite preview",```

To start, run ``` npm run dev```

#

initiate react using the following command ``` npm i  react@18.2.0 react-dom@18.2.0 ```

#

### React querrying

use ``` npm i @tanstack/react-query@4.10.1```
