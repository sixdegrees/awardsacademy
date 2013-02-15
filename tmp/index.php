<!DOCTYPE html><html><head><meta charset="utf-8" /><title>hull</title><meta content="width=980" name="viewport" /><meta content="hull is a full stack social platform as a service. It makes it easy for developers to build social apps with open and reusable components." name="description" /><meta content="hull: build social apps in minutes, not weeks" property="og:title" /><meta content="company" property="og:type" /><meta content="hull" property="og:site_name" /><meta content="http://hull.io" property="og:url" /><meta content="http://hull.io/assets/hull.jpg" property="og:image" /><meta content="hull is a full stack social platform as a service. It makes it easy for developers to build social apps with open and reusable components." property="og:description" /><link href="//app-staging.oahu.fr/assets/oahu.css" media="all" rel="stylesheet" type="text/css" /><link href="//app-staging.oahu.fr/assets/oahu-apps.css" media="all" rel="stylesheet" type="text/css" /><link href="stylesheets/style.css" media="all" rel="stylesheet" type="text/css" /><link href="stylesheets/vendor/bootstrap-responsive.css" media="screen" rel="stylesheet" type="text/css" /><!--[if IE]><link href="stylesheets/ie.css" media="screen" rel="stylesheet" type="text/css" /><![endif]--><link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" /><script src="javascripts/vendor/modernizr.js" type="text/javascript"></script></head><body><div class="navbar navbar-static-top navbar-inverse"><div class="navbar-inner"><div class="container"><div class="content"><div class="row"><div class="span12"><div class="brand"><a href="/">Home</a></div><ul class="nav"><li><a href="/cesar">Cesar</a></li><li><a href="/oscars">Oscars</a></li><li><a href="/rules">Les Règles du jeu</a></li></ul></div></div></div></div></div></div><div class="container"><div class="hero-unit"><h1><a href="/" id="logo"><img src="/images/logo.png" /></a></h1></div><div class="content"><div class="row section"><div class="span7"><p class="lead">Personne mieux que vous ne saurait pronostiquer les résultats des Césars ?</p><p>Vous connaissez tellement bien l’Academy Of Motion Picture Arts and Science que vous savez déjà qui gagnera un Oscar cette année ?<br />Vous êtes le Brian De Palmarès des pronostics ?</p><h4>Prouvez-le !</h4><p>Pronostiquez les résultats des Césars et des Oscars et montez sur le podium de l’Award Academy.</p><p>Vous pourrez même imprimer vos pronostics pour votre soirée Césars/Oscars entre amis.</p><h4>À vos marques… Prêts ?... PRONOSTIQUEZ !</h4></div><div class="span5"><ul class="thumbnails connect"><li class="span5"><img src="/images/cesar_button.jpg" /><div class="login" data-oahu-game="cesar" data-oahu-game_name="Cesar" data-oahu-widget="login_redirect"></div></li><li class="span5"><img src="/images/oscar_button.jpg" /><div class="login" data-oahu-game="oscars" data-oahu-game_name="Oscars" data-oahu-widget="login_redirect"></div></li></ul></div></div><div class="row section"><div class="span12"><div class="friends" data-oahu-provider="oahu" data-oahu-widget="friends"></div></div></div></div></div><div class="page_footer"><ul class="inline"><li><a href="http://www.silenzio.fr" target="_blank"><img class="logo" src="/images/silenzio.png" /></a></li><li><a><img class="logo" src="/images/yipikaye.png" /></a></li><li><a href="http://hull.io" target="_blank"><img class="logo" src="/images/hull.png" /></a></li></ul></div><script type='text/handlebars' data-oahu-template="quiz_printable">
  <div class='row answers_headers'>
    <div class='span8'>
      <h1>Les votes de {{#account}}{{name}}{{/account}} pour les {{self}}</h1>
    </div>
    <div class='span4'>
      <h4>
        <a class="btn secondary" data-oahu-action="quiz.do_print">Imprimer</a>
      </h4>
    </div>
  </div>
  <div class='row user_answers'>
    {{#answers_details}}
      <div class='span4'>
        <h4>{{name}}</h4>
        <div class='media answer'>
          {{#response}}
            {{> quiz_answer}}
          {{/response}}
        </div>
      </div>
    {{/answers_details}}
  </div>
  <a class="btn secondary" data-oahu-action="quiz.do_print">Imprimer</a>
</script>

<script type='text/handlebars' data-oahu-template="identity">
  <a class='btn btn-block btn-primary' href="/{{game}}"
  {{^account}}
    data-oahu-action="login_redirect.logon" data-oahu-provider="facebook"
  {{/account}}>Pronostiquez les {{game_name}}</a>
</script>


<script type="text/handlebars" data-oahu-template="quiz_entries">
  <div class="stack">
    <div class='page_counter'>
      <a class='current'><span class="current_idx"></span> / {{entries.length}}</a>
    </div>
    {{#entries}}
      {{> quiz_entry}}
    {{/entries}}
  </div>
  <span class="quiz_timer"></span>
  <span class="question_timer"></span>
</script>

<script type="text/handlebars" data-oahu-template="quiz_answer">
  {{#resource}}
    <div class="pull-left" href="#">
    {{> quiz_resource}}
    </div>
  {{/resource}}
  <div class="media-body">
    <h4 class="media-heading">{{name}}</h4>
    {{> quiz_description}}
  </div>
</script>

<script type="text/handlebars" data-oahu-template="quiz_resource">
  {{#is_image}}
    <img class='media-object' src="{{paths.small}}">
  {{/is_image}}
  {{#is_video}}
    <div class="videoplayer" id="videoplayer_{{id}}" data-oahu-widget="video" data-oahu-id='{{id}}'></div>
  {{/is_video}}
</script>

<script type="text/handlebars" data-oahu-template="quiz_pagination">
  <div class='pagination'>
    <div class='pages'>
      <a class='btn btn-small prev'  data-oahu-action="quiz.prev">← Pr&eacute;c&eacute;dent</a>
      <a class='btn btn-small next'  data-oahu-action="quiz.next">Suivant →</a>
    </div>
    <div class='actions'>
      <a class='btn btn-small finish' data-oahu-action="quiz.finish">Terminer</a>
    </div>
  </div>
</script>

<script type="text/handlebars" data-oahu-template="quiz_entry">
  <div class='entry' id='entry_{{id}}' data-entry-id='{{id}}'>
    <div class='question row'>
      <div class='span6'>
        <h2 class='title'>{{name}}</h2>
        {{#picture}}
          <div class="picture">{{#picture}}<div><img src="{{picture}}"></div>{{/picture}}</div>
        {{/picture}}
        {{#resource}}
          {{> quiz_resource}}
        {{/resource}}
        {{> quiz_description}}
      </div>
      <div class='span6'>
        {{>quiz_pagination}}
      </div>
    </div>

    <ul class="answers">
      {{#answers}}
        <li class="{{#if selected}}selected{{/if}} span4 media answer" id="answer_{{id}}" data-oahu-action="quiz.answer" data-oahu-opts="{{id}}">{{> quiz_answer}}</li>
      {{/answers}}
    </ul>
  </div>
</script>


<script type="text/handlebars" data-oahu-template="quiz_intro">
  {{#account}}
  <div class='actions'>
    <h1 class='text-center'>Vous êtes prêts ?</h1>
    <a class="btn btn-info btn-block btn-large" data-oahu-action="quiz.start" data-oahu-opts='facebook'>Démarrer les pronostics</a>
  </div>
  {{/account}}
  {{^account}}
    <p class='message'>Bonjour, bienvenue cher inconnu... Connectez vous avec facebook !</p>
    <div class='actions'>
      <a class="btn btn-primary facebook" data-oahu-action="quiz.start" data-oahu-opts='facebook'>Participer avec Facebook</a>
    </div>
  {{/account}}
</script>

<script type="text/handlebars" data-oahu-template="quiz_shares">
</script>

<script type="text/handlebars" data-oahu-template="quiz_submitted">
  <p>Bravo ! Vos pronostics sont bien enregistrés.</p>
  <p>
    <a data-oahu-action="quiz.show_printable" class='btn btn-primary'>Imprimer Mes Pronostics</a>
  </p>
  <p>
    <em>(On vous a fait une jolie présentation pour vous faire mousser à votre soirée César/Oscars)</em>
  </p>

  <div class='actions'>
    <a class="btn btn-warning" data-oahu-action="quiz.restart">Modifier mes pronostics</a>
    <a class="btn btn-info" data-oahu-action="quiz.go_to_other">Pronostiquer les {{other}}</a>
  </div>
  <div class='shares'>
    <h3>Partager</h3>
    <a class="btn btn-small share facebook btn-primary" data-oahu-action="quiz.invite"><i class='icon'></i> Inviter des amis</a>
    <a class='btn btn-small share facebook btn-primary' data-oahu-action="quiz.share" data-oahu-provider='facebook'><i class='icon'></i> Partager</a>
    <a class='btn btn-small share twitter btn-primary' data-oahu-action="quiz.share" data-oahu-provider='twitter'><i class='icon'></i> Tweeter</a>
  </div>
</script>

<script type="text/handlebars" data-oahu-template="friends">
  {{#if account}}
    <h5>Vos amis y ont joué :</h5> 
    <ul class="friends thumbnails">
      {{#ifEqual provider "oahu"}}
        {{#friends}}
          <li class='span3 thumbnail'>
            <div class="media">
              <div class="pull-left">
                <img class="media-object" src="{{picture}}">
              </div>
              <div class="media-body">
                <h4 class="media-heading">{{name}}</h4>
                <strong>A pronostiqué : </strong>
                {{#key_value badges}}
                  <span class="label">Les {{value.name}}</span>
                {{/key_value}}
              </div>
            </div>
          </li>
        {{/friends}}
      {{/ifEqual}}
      {{#ifEqual provider "facebook"}}
        {{#friends}}
          <li class='span2'>
            <a href="{{url}}" class='thumbnail'>
              <img src="{{picture.data.url}}"/>
              {{name}} 
            </a>
          </li>
        {{/friends}}
      {{/ifEqual}}
      {{^friends}}
        Aucun ami n'a participé pour le moment.
      {{/friends}}
    </ul>
  {{else}}
    <p class='lead'>Connectez vous pour voir lesquels de vos amis ont participé !</p>
    <a class='btn btn-block btn-large btn-primary' data-oahu-action="login" data-oahu-provider='facebook'>Connectez vous avec Facebook</a>
  {{/if}}
</script>

</body><script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script><script src="//app-staging.oahu.fr/assets/oahu.js" type="text/javascript"></script><script src="//app-staging.oahu.fr/assets/oahu-apps.js" type="text/javascript"></script><script src="javascripts/vendor.js" type="text/javascript"></script><script src="javascripts/app.js" type="text/javascript"></script><script type="text/javascript">$(function(){
  Oahu.init({ 
    appId: '51194b28873b0c4ea00021bf', 
    debug: true,
    verbose: true
  });
})</script></html>