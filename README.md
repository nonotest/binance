This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Styles

To avoid pulling external libs I use raw css-in-js styles.
Each component has a style object that defines styles
needed to achieve the desired display.

The app listens to media query changes via a hook to
know when to change layout/specific css.

Ideally I would use a tool like styled components or emotion.
You could then use the media-queries directly in the
styled components.

# Layout

We set a max fixed width for each widgets inside
the left column on "laptop" mode.
Ob "mobile" mode to make it look better we divide
the column by 2 and allow each widget to take all the space.

# PDF Note

The PDF looks like there is some margin/padding left
on the mobile view for the "main" box and "appbar" box
It looks like it is just a copy paste error so
I did not handle it.
If that was needed the css for our mobile Content would
change to

```javascript
<Content containerStyles={{ marginBottom: 10, marginLeft: 10 }} />
```

I would also add a conditional on the layout for our
appbar component and add the extra margin there for mobile
layout.
