# 🚀 SpaceTime - A time capsule
<p align="center">

<img src="https://github.com/IagoDantas/spacetime/assets/82843173/1099fcdf-1057-4d05-ac5a-4153c90914c6" width="800" height="500">
</p>
<hr/>

## ❓ What's SpaceTime
<p align="center">

SpaceTime was a project developed during RocketSeat NLW week which is a time capsule using Github OAuth.
This repository contains the complete application.
</p>

## 🔨 Technologies and Tools

- 💻 Web
  - React
  - Next.JS
  - Tailwind
  - Typescript
  - Lucide-React
  - JWT-Decode
  
- 📱 Mobile
  - Expo
  - React-Native
  - Typescript
  - React Navigation
  - Expo Auth Session
  - Expo Image Picker
  - Expo Secure Store
  
- 🖱💻 Others
  - Fastify
  - Prisma
  - Zod
  - DotEnv
  - Github OAuth
  - JWT


## 👨🏼‍💻 How to run ?

### 🚀 Server

**Clone the repository**

```bash
git clone https://github.com/IagoDantas/spacetime.git
```

**Install the dependencies**

```bash
cd server

npm install
```

- You must have configured OAuth Apps on Github. [https://github.com/settings/developers](https://github.com/settings/developers)
- Fill in the variable values `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env`

```
# Database 
DATABASE_URL="file:./dev.db"

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```
**Run the migrations**

```bash
npx prisma migrate dev
```

**Start the server application**

```bash
npm run dev
```

###  🚀 Web

**Install the dependencies**

```bash
cd web

npm install
```

**Setup**
- Fill in the variable values `NEXT_PUBLIC_GITHUB_CLIENT_ID` in `.env.local`

```
# Github
NEXT_PUBLIC_GITHUB_CLIENT_ID=
```

**Start the web application**

```bash
npm run dev
```

### 🚀 Mobile


**Install dependencies and start the project**

```bash
cd mobile

npm install
```

```bash
npx expo start
```

## 🎨 Layout
- [Figma](https://www.figma.com/community/file/1240070456276424762/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Ignite)

<img src="https://github.com/IagoDantas/spacetime/assets/82843173/1563e7dc-8911-4c72-946c-8f65521cf634" width="1100" height="620">
<img src="https://github.com/IagoDantas/spacetime/assets/82843173/995a1692-f4cd-49ef-bd47-902b1afa08ad" width="1100" height="620">
<img src="https://github.com/IagoDantas/spacetime/assets/82843173/03fe577a-6935-4dba-bf6d-beb1635bfaa2" width="1100" height="620">

## 📒 Notion 

- [Trilha Ignite](https://efficient-sloth-d85.notion.site/Trilha-Ignite-e2ed19139b544a46984a28b65dcd4aae)
