<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><%= title %></title>
    <!-- build:css styles/styles.css-->
    <link rel="stylesheet" type="text/css" href="styles/main.css">
    <!-- endbuild-->
  </head>
  <body>
    <main>
      <h1>'Allo, 'Allo!</h1>
      <h3>You now have :</h3>
      <ul>
        <li>PHP</li>
        <li>Stylus</li>
        <% if (jQuery || imgProgress) { %><li>jQuery</li><% } %>
        <li>CoffeeScript</li>
        <% if (imgProgress) { %><li>ImgProgress</li><% } %>
        <div class="php"><?php echo "This is php!"; ?></div>
      </ul>
    </main>
    <!-- build:js scripts/scripts.js-->
     <% if (jQuery || imgProgress) { %><script src="bower_components/jquery/dist/jquery.min.js"></script><% } %>
     <% if (imgProgress) { %><script src="bower_components/imgprogress/imgprogress.js"></script><% } %>
     <script src="scripts/main.js"></script>
    <!-- endbuild-->
  </body>
</html>
