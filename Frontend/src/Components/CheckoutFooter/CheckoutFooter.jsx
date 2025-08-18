import React from 'react'
import { CopyRight, Flex, FooterHeader, FooterText, FooterWrapperC, Grid, Img2, Wallet } from './CheckoutFooterCSS';

const CheckoutFooter = () => {
  return (
    <FooterWrapperC>
      <div>
        <FooterHeader> WE ACCEPT </FooterHeader>
        <Flex>
          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=VISA" alt="" />
          </div>

          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=MAESTRO" alt="" />
          </div>

          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=AMEX" alt="" />
          </div>

          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=DINERS" alt="" />
          </div>

          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=RUPAY" alt="" />
          </div>

          <div>
            <img src="https://dummyimage.com/60x36/ccc/000.png&text=MASTERCARD" alt="" />
          </div>

          <Wallet>
            <div>
              <img src="https://dummyimage.com/36x36/ccc/000.png&text=W" alt="" />
            </div>
            <FooterText>Wallet</FooterText>
          </Wallet>

          <Wallet>
            <div>
              <img src="https://dummyimage.com/36x36/ccc/000.png&text=N" alt="" />
            </div>
            <FooterText>Internet banking</FooterText>
          </Wallet>
        </Flex>
      </div>

      <div>
        <FooterHeader> BUY SAFE, PAY EASY </FooterHeader>

        <Flex>
          <Grid>
            <img src="https://dummyimage.com/24x24/ccc/000.png&text=C" alt="" />
            <div>
              <span>No Cost EMIs: </span> Now pay in easy installments at no
              additional cost
            </div>
          </Grid>
          <CopyRight>
            Copyright 2021 FurnitureStore.com. All rights Reserved.
          </CopyRight>
        </Flex>
      </div>

      <div>
        <FooterHeader>100% SAFE & SECURE</FooterHeader>
        <Flex>
          <div>
            <img src="https://dummyimage.com/48x24/ccc/000.png&text=SSL" alt="" />
          </div>
          <div>
            <img src="https://dummyimage.com/48x24/ccc/000.png&text=PCI" alt="" />
          </div>
        </Flex>
      </div>
    </FooterWrapperC>
  );
}

export { CheckoutFooter }