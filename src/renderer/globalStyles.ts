import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<any>`
  body {
    background: ${({theme}) => theme.lightGray};
  }

  .header {
    &__settingsBlock {
      button {
        color: ${({theme}) => theme.activeDark};
        &:hover {
          background: ${({theme}) => theme.hoverBlue};
          color: ${({theme}) => theme.white};
        }
      }
    }
    &__windowBlock {
      button {
        color: ${({theme}) => theme.activeDark};
        &:hover {
          background: ${({theme}) => theme.hoverBlue};
          color: ${({theme}) => theme.white};
        }
      }
    }
  }

  .navigation {
    a {
      color: ${({theme}) => theme.activeDark};
      &:hover {
        background: ${({theme}) => theme.hoverBlue};
        color: ${({theme}) => theme.white};
      }
    }
    .activeLink {
      background: ${({theme}) => theme.activeDark};
      color: ${({theme}) => theme.white};
      i {
        color: ${({theme}) => theme.white};
      }
      &:hover {
        background: ${({theme}) => theme.activeDark} !important;
      }
    }
  }

  .foodPage {
    .productsBlock {
      background: ${({theme}) => theme.white};
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      &__header {
        border-bottom: 2px solid ${({theme}) => theme.lightGrayBorder};
        h3 {
          color: ${({theme}) => theme.blue};
        }
      }
      &__productsList {
        &::-webkit-scrollbar {
          background: ${({theme}) => theme.white};
        }
        &::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.activeDark};
        }
        button {
          border-bottom: 1px solid ${({theme}) => theme.lightGrayBorder};
          color: ${({theme}) => theme.activeDark};
          &:hover {
            background: ${({theme}) => theme.hoverBlue};
            color: ${({theme}) => theme.white};
          }
        }
        .activeProduct {
          background: ${({theme}) => theme.activeDark};
          color: ${({theme}) => theme.white};
          border-bottom: 1px solid ${({theme}) => theme.activeDark};
          &:hover {
            background: ${({theme}) => theme.activeDark} !important;
          }
        }
      }
    }
    .productInfoBlock {
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      background: ${({theme}) => theme.white};
      &__productInfo {
        h3 {
          color: ${({theme}) => theme.blue};
          span {
            color: ${({theme}) => theme.activeDark};
          }
        }
        &_group {
          p {
            border-bottom: 1px solid ${({theme}) => theme.darkGray};
            color: ${({theme}) => theme.bwText}
          }
        }
        .productGroup-1 {
          background: ${({theme}) => theme.lightOrange};
        }
        .productGroup-2 {
          background: ${({theme}) => theme.lightGreen};
        }
        .productGroup-3 {
          background: ${({theme}) => theme.lightBlue1};
        }
        .productGroup-4 {
          background: ${({theme}) => theme.lightBlue2};
        }
      }
      &__notSelectedProduct {
        h3 {
          color: ${({theme}) => theme.activeDark};
        }
      }
    }
  }

  .generalPage {
    .settingsBlock {
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      background: ${({theme}) => theme.white};
      &__productsList {
        border-left: 2px solid ${({theme}) => theme.lightGrayBorder};
        border-right: 2px solid ${({theme}) => theme.lightGrayBorder};
        &_header {
          border-bottom: 2px solid ${({theme}) => theme.lightGrayBorder};
          h3 {
            color: ${({theme}) => theme.blue};
          }
        }
        &_list {
          button {
            border-bottom: 1px solid ${({theme}) => theme.lightGrayBorder};
            color: ${({theme}) => theme.activeDark};
            &:hover {
              background: ${({theme}) => theme.hoverBlue};
              color: ${({theme}) => theme.white};
            }
          }
          .disableButton {
            color: ${({theme}) => theme.darkGray};
          }
        }
      }
      &__paramsList {
        &_header {
          h3 {
            color: ${({theme}) => theme.blue};
          }
        }
      }
    }
    .resultBlock {
      background: ${({theme}) => theme.white};
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      &__header {
        h3 {
          color: ${({theme}) => theme.blue};
        }
      }
    }
  }
`
