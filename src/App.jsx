import {styled} from "@linaria/react";
import logoImage from './icons/nft.svg'
import googleIcon from './icons/google.svg'
import bigLogo from './icons/logo.png'
import {useState} from "react";
import {ClearIcon} from "./ClearIcon.jsx";
import {PassIcon} from "./PassIcon.jsx";

const AppStyled = styled.div`
  height: 100svh;

  --layout-bg: ffffff;
  --bg-primary: #5429FF;
  --bg-secondary: #CBCCE8;

  --text-primary: #344054;
  --text-secondary: #667085;
  --text-primary-inverse: #ffffff;

  --border-color: #D0D5DD;
  
  &[data-theme="dark"] {
    --layout-bg: #1c1626;
    --bg-primary: #5429FF;
    --bg-secondary: #CBCCE8;

    --text-primary: #ffffff;
    --text-secondary: #b8b0b8;
    --text-primary-inverse: #ffffff;

    --border-color: #312b3a;
  }
  
  background: var(--layout-bg);
  color: var(--text-primary);
  transition: color, background-color .5s;
`;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Layout = styled.div`
  width: 100%;
  padding: 0 24px;

  @media screen and (min-width: 500px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1000px) {
    width: 1000px;
  }
`;

const LogoStyled = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 32px;
  }
`;

const BigPictureStyled = styled.img`
  border-radius: 40px;
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const IconStyled = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoTextStyled = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.01em;
`;

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HeadLineStyled = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.01em;
`;

const SubtitleStyled = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: var(--text-secondary);
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormItemTitleStyled = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;

const FormInputWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 4px;
  border: solid 1px var(--border-color);
  border-radius: 8px;
  padding: 10px 14px;

  :focus-within {
    border-color: var(--bg-primary);
    transition: 0.5s;
  }
`;

const FormInputStyled = styled.input`
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
`;

const FormInputButtonStyled = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: inline-flex;
  
  svg * {
    stroke: var(--text-primary);
  }
`;

const SignInButtonStyled = styled.button`
  background: var(--bg-primary);
  color: var(--text-primary-inverse);
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;

const SignInGoogleButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--layout-bg);
  color: var(--text-primary);
  padding: 10px 12px;
  border: solid 1px var(--border-color);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;

function App() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    };
    return (
        <AppStyled data-theme={theme}>
            <LayoutWrapper>
                <Layout>
                    <PageStyled>
                        <ContentStyled>
                            <LogoStyled onClick={toggleTheme}>
                                <IconStyled src={logoImage} alt={'logo'}/>
                                <LogoTextStyled>PNFT Market</LogoTextStyled>
                            </LogoStyled>
                            <HeaderStyled>
                                <HeadLineStyled>NFT Access</HeadLineStyled>
                                <SubtitleStyled>
                                    Please fill your detail to access your account.
                                </SubtitleStyled>
                            </HeaderStyled>
                            <FormStyled>
                                <FormItemStyled>
                                    <FormItemTitleStyled>Email</FormItemTitleStyled>
                                    <FormInputWrapperStyled>
                                        <FormInputStyled/>
                                        <FormInputButtonStyled type={'button'}>
                                            <ClearIcon/>
                                        </FormInputButtonStyled>
                                    </FormInputWrapperStyled>
                                </FormItemStyled>
                                <FormItemStyled>
                                    <FormItemTitleStyled>Email</FormItemTitleStyled>
                                    <FormInputWrapperStyled>
                                        <FormInputStyled/>
                                        <FormInputButtonStyled type={'button'}>
                                            <PassIcon/>
                                        </FormInputButtonStyled>
                                    </FormInputWrapperStyled>
                                </FormItemStyled>
                                <SignInButtonStyled>Sign in</SignInButtonStyled>
                                <SignInGoogleButtonStyled type={'button'}>
                                    <img src={googleIcon} alt={''}/>
                                    <span>Sign in with Google</span>
                                </SignInGoogleButtonStyled>
                            </FormStyled>
                        </ContentStyled>
                        <div><BigPictureStyled src={bigLogo} alt={'big-logo'}/></div>
                    </PageStyled>
                </Layout>
            </LayoutWrapper>
        </AppStyled>
    );
}

export default App;
