import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import './LoginPage.css'
const providers = [{ id: 'credentials', name: 'Credentials' }];
// preview-start
const BRANDING = {
  logo: (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/2/2a/Al-Ameen_Logo.png"
      alt="AlAmeen Logo"
      style={{ height: 100 }}
    />
  ),
  title: 'Students Portal',
};
// preview-end

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function BrandingSignInPage() {
  const theme = useTheme();
  return (
    
    // preview-start
    <>
<div className='body'>
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}

      />

    </AppProvider>
    </div>
    </>
    // preview-end
  );
}
