<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><%= title %></title>
    <link rel="stylesheet" type="text/css" href="build/build.css">
  </head>
  <body <% if (animateCss) { %>class=".animated.rollIn"<% } %>>
    <main>
      <h1>'Allo, 'Allo!</h1>
      <?php echo "This is php!"; ?>
      <img src="https://nodejs.org/images/logos/nodejs-dark.png">
      <h3>You now have :</h3>
      <ul>
        <li>PHP</li>
        <li>Stylus</li>
        <% if (jQuery || imgProgress || velocity) { %><li>jQuery</li><% } %>
        <% if (imgProgress) { %><li>ImgProgress</li><% } %>
        <% if (velocity) { %><li> VelocityJS </li><% } %>
      </ul>
    </main>
     <script src="build/build.js"></script>
  </body>
</html>
