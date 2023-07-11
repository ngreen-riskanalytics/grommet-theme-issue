import React, {useState} from 'react';
import {
  Box,
  Button,
  Grommet,
  grommet,
  Header,
  Page,
  PageContent,
  PageHeader,
  Text,
} from 'grommet';
import {Moon, Sun} from "grommet-icons";
import {deepMerge} from "grommet/utils";
import './App.css';

const theme = deepMerge(grommet, {
  "global": {
    "colors": {
      "brand": "#3D4753",
      "text": {
        "dark": "#aaaaaa",
        "light": "#333333"
      },
      "text2": {
        "dark": "#abcdef",
        "light": "#345678"
      },
      "background": {
        "dark": "#333333",
        "light": "#999999"
      },
      "background2": {
        "dark": "#234567",
        "light": "#9abcde"
      }
    }
  }
});
// };

const AppBar = (props) => (
  <Header
    $pad={{left: "medium", right: "small", vertical: "small"}}
    elevation="medium"
    {...props}
  />
);

function App() {
  const [dark, setDark] = useState(false);
  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <div>some text</div>
      <Page>
        <AppBar>
          <Text size="large">Theme Switching Problem</Text>
          <PageContent>
            <PageHeader title="Welcome to Grommet!" color={dark ? "white" : "black"}/>
            <Button
              title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              icon={dark ? <Moon/> : <Sun/>}
              onClick={() => setDark(!dark)}
              tip={{
                content: (
                  <Box
                    pad="small"
                    round="small"
                    background={dark ? "dark-1" : "light-3"}
                  >
                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </Box>
                ),
                plain: true,
              }}
            />
          </PageContent>
        </AppBar>
        <div>some text inside the page</div>
      </Page>
      <div>some text after the page</div>
    </Grommet>
  );
}

export default App;
