# Papeo

This is a social network app which user can share their party across the world. This app was buit with React Native framework.

## Get started
We guess you have a basic knowledgement and environment for react native framework on your side. If you haven't, please check [here](https://reactnative.dev/docs/getting-started).

1. Clone repository
   > git clone https://devcocup@bitbucket.org/juglsoft/mobile-app.git

2. Install npm package and pods
   > cd mobile-app && yarn && npx pod-install

3. Run project via terminal or xcode

## Project structure
```
src
├── assets
│   ├── fonts -> custom fonts
│   ├── icons -> icons as svg file
│   └── img   -> images
├── components -> global components
│   ├── icon
│   │   ├── icon.interface.ts -> props of component  
│   │   └── icon.tsx -> declare component  
│   └── ...
├── constant -> constant
│   ├── login
│   │   └── data.ts -> declare constant for login
│   └── ...
├── helpers -> declare the global functionalities
│   └── utils.ts
├── modals
│   ├── login-verify-email -> name of modal
│   │   ├── login-verify-email.modal.ts -> define the modal
│   │   └── styles.ts -> styles for modal  
│   └── ...
├── navigation -> navigation of app
│   ├── auth.navigation.tsx
│   ├── party.navigation.tsx
│   ├── app.navigation.tsx
│   └── ...
├── screens -> pages of app
│   ├── create-party
│   │   ├── components
│   │   │   ├── next-button
│   │   │   │   ├── next-button.interface.tsx
│   │   │   │   ├── next-button.tsx
│   │   │   │   └── styles.ts
│   │   │   └── ...
│   │   ├── widgets
│   │   │   ├── create-party-date
│   │   │   │   ├── components
│   │   │   │   ├── create-party-date.widget.tsx
│   │   │   │   └── styles.ts
│   │   │   └── ...
│   │   ├── create-party.screen.tsx
│   │   └── styles.ts
│   └── ...
├── store
│   └── auth
│   │   ├── auth.types.ts
│   │   ├── auth.reducer.ts
│   │   ├── auth.actions.ts
│   │   ├── auth.operations.ts
│   │   ├── auth.selectors.ts
│   │   └── auth.ts
│   └── ...
└── styles
    ├── colors
    │   ├── colors.interface.ts
    │   └── colors.ts
    └── fonts
        ├── fonts.interface.ts
        └── fonts.ts
```