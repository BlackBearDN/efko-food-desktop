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
      &__paramsList {
        &_header {
          h3 {
            color: ${({theme}) => theme.blue};
          }
        }
        &_mainParams {
          div {
            h3 {
              color: ${({theme}) => theme.activeDark};
            }
            h4 {
              color: ${({theme}) => theme.activeDark};
            }
            .activeGenderButton {
              background: ${({theme}) => theme.blue};
            }
            input {
              background: ${({theme}) => theme.lightGray};
              border: 1px solid ${({theme}) => theme.lightShadow};
              color: ${({theme}) => theme.activeDark};
              &:focus {
                border: 1px solid ${({theme}) => theme.darkShadow};
              }
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
          }
        }
        &_groupsSection {
          h3 {
            color: ${({theme}) => theme.blue};
          }
          &_groups {
            .activeGroupButton {
              background: ${({theme}) => theme.blue};
            }
          }
          &_viewAllButton {
            color: ${({theme}) => theme.activeDark};
          }
        }
        &_footer {
          &_generateCartButton {
            background: ${({theme}) => theme.blue};
            &:hover {
              background:  ${({theme}) => theme.activeDarkDark};
            }
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
      &__content {
        &::-webkit-scrollbar {
          background: ${({theme}) => theme.white};
        }
        &::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.activeDark};
        }
        &_productInfo {
          background: ${({theme}) => theme.lightBlue2};
          h3 {
            color: ${({theme}) => theme.activeDark};
          }
          p {
            color: ${({theme}) => theme.activeDark};
          }
          span {
            color: ${({theme}) => theme.activeDark};
          }
          details {
            summary {
              color: ${({theme}) => theme.activeDark};
            }
            summary::before {
              color: ${({theme}) => theme.activeDark};
            }
          }
          details[open] > summary::before {
            color: ${({theme}) => theme.activeDark};
          }
        }
        &_helpText {
          color: #afafaf;
        }
      }
      &__paramsSection {
        h3 {
          color: ${({theme}) => theme.blue};
        }
        &_params {
          background: ${({theme}) => theme.lightGreen};
          &::-webkit-scrollbar {
            background: ${({theme}) => theme.white};
          }
          &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.activeDark};
          }
          p {
            color: ${({theme}) => theme.activeDark};
          }
        }
      }
      &__footer {
        &_generateDashesButton {
          background: ${({theme}) => theme.blue};
          &:hover {
            background:  ${({theme}) => theme.activeDarkDark};
          }
        }
        h4 {
          color: ${({theme}) => theme.activeDark};
        }
      }
    }
  }

  .dashesPage {
    &__listBlock {
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      background: ${({theme}) => theme.white};
      &_dashes {
        &_header {
          h3 {
            color: ${({theme}) => theme.blue};
          }
        }
        &_list {
          &_empty {
            color: ${({theme}) => theme.bwText};
          }
        }
      }
    }
    &__dashBlock {
      background: ${({theme}) => theme.white};
      box-shadow: 0 0 10px ${({theme}) => theme.lightShadow};
      &_header {
        h3 {
          color: ${({theme}) => theme.blue};
        }
      }
      &_products {
        &::-webkit-scrollbar {
          background: ${({theme}) => theme.white};
        }
        &::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.activeDark};
        }
        h4 {
          color: ${({theme}) => theme.activeDark};
        }
        p {
          background: ${({theme}) => theme.lightBlue2};
          color: ${({theme}) => theme.activeDark};
        }
      }
      &_params {
        background: ${({theme}) => theme.lightGreen};
        &::-webkit-scrollbar {
          background: ${({theme}) => theme.white};
        }
        &::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.activeDark};
        }
        p {
          color: ${({theme}) => theme.activeDark};
        }
      }
      &_footer {
        a {
          background: ${({theme}) => theme.blue};
          color: #ffffff;
          &:hover {
            background: ${({theme}) => theme.hoverDarkBlue};
            color: #ffffff;
          }
        }
      }
      &_helpText {
        color: #afafaf;
      }
    }
  }

  .productsList {
    border-left: 2px solid ${({theme}) => theme.lightGrayBorder};
    border-right: 2px solid ${({theme}) => theme.lightGrayBorder};
    &_header {
      border-bottom: 2px solid ${({theme}) => theme.lightGrayBorder};
      h3 {
        color: ${({theme}) => theme.blue};
      }
    }
    &_list {
      &_addButton {
        border-bottom: 1px solid ${({theme}) => theme.lightGrayBorder} !important;
        color: ${({theme}) => theme.activeDark};
        &:hover {
          background: ${({theme}) => theme.lightBlue2};
          color: ${({theme}) => theme.activeDark};
        }
      }
      &_removeButton {
        background: ${({theme}) => theme.lightBlue2} !important;
        color: ${({theme}) => theme.activeDark};
        border-bottom: 1px solid ${({theme}) => theme.lightGrayBorder} !important;
        &:hover {
          background: ${({theme}) => theme.lightOrange} !important;
          color: ${({theme}) => theme.activeDark};
        }
      }
      .disableButton {
        color: ${({theme}) => theme.darkGray};
      }
    }
  }

  .dashCard {
    background: ${({theme}) => theme.lightGray};
    box-shadow: 0 0 5px ${({theme}) => theme.lightShadow};
    &:hover {
      box-shadow: 0 3px 7px ${({theme}) => theme.lightShadow};
    }
    p {
      color: ${({theme}) => theme.bwText};
    }
  }

  .loader {
    .lds-default div {
      background: ${({theme}) => theme.activeDark};
    }
  }

  .infoMessagePopupRed {
    background: #ff8551;
  }
  .infoMessagePopupBlue {
    background: ${({theme}) => theme.blue};
  }
`
