# DevSpace for the ConcreteCMS Bedrock theme

## Motivation

Currently in an internship that is focused on ConcreteCMS, I tasked my self to create a theme for the CMS. When googeling on how to create a concreteCMS theme, I found out that creating a basic functional theme (That has everything) does not really exist. The documentation requires me to type it everytime and is a bit over the place since 9.0 and 8.0 are a bit over the place and constantly reffering to eachother which is sometimes confusing to me, anyway. So, I did some research and found out that this repository exists [theme_bedrock_documentation](https://github.com/concretecms/theme_bedrock_documentation/tree/main). But when trying out the default webpack configuration it does not work for me, and there is some bloated files that the project does not need. So, I decided to create a new repository that is focused on a clean and simple theme for ConcreteCMS in 1 place.

## Setup

### Prerequisites

- Working installation of ConcreteCMS placed in the root of the project called `cms`
- NodeJS
- NPM

### Installation

1. Clone the repository
1. Move everything in `themes` to the `themes` folder in your ConcreteCMS installation.
1. Choose between the `flintstone-dev` or `flintstone-dev-tailwind` folder. Delete the one you do not want to use. for this example we will use `flintstone-dev`.
1. Run `cd flintstone-dev`
1. Run `npm install`
1. Edit the `webpack.config.js` file to your needs (Explanation can be found in the file)
1. Run `npm run production` to transpile the files to their destination.
