quiz = Oahu::Model.find("5309dda0873b0c55df0182dc")

##########################################################

q = quiz.entries.new; q.name        = "Meilleure Actrice"
  a = q.answers.new ; a.name= "Fanny Ardant";                                                a.description= "LES BEAUX JOURS";                                                                                       a.save
  a = q.answers.new ; a.name= "Bérénice Bejo";                                               a.description= "LE PASSÉ";                                                                                              a.save
  a = q.answers.new ; a.name= "Catherine Deneuve";                                           a.description= "ELLE S'EN VA";                                                                                          a.save
  a = q.answers.new ; a.name= "Sara Forestier";                                              a.description= "SUZANNE";                                                                                               a.save
  a = q.answers.new ; a.name= "Sandrine Kiberlain";                                          a.description= "9 MOIS FERME";                                                                                          a.save
  a = q.answers.new ; a.name= "Emmanuelle Seigner";                                          a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
  a = q.answers.new ; a.name= "Léa Seydoux";                                                 a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Acteur"
  a = q.answers.new ; a.name= "Mathieu Amalric";                                             a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
  a = q.answers.new ; a.name= "Michel Bouquet";                                              a.description= "RENOIR";                                                                                                a.save
  a = q.answers.new ; a.name= "Albert Dupontel";                                             a.description= "9 MOIS FERME";                                                                                          a.save
  a = q.answers.new ; a.name= "Grégory Gadebois";                                            a.description= "MON ÂME PAR TOI GUÉRIE";                                                                                a.save
  a = q.answers.new ; a.name= "Guillaume Gallienne";                                         a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Fabrice Luchini";                                             a.description= "ALCESTE À BICYCLETTE";                                                                                  a.save
  a = q.answers.new ; a.name= "Mads Mikkelsen";                                              a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleure Actrice dans un Second Rôle"
  a = q.answers.new ; a.name= "Marisa Borini";                                               a.description= "UN CHÂTEAU EN ITALIE";                                                                                  a.save
  a = q.answers.new ; a.name= "Françoise Fabian";                                            a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Julie Gayet";                                                 a.description= "QUAI D'ORSAY";                                                                                          a.save
  a = q.answers.new ; a.name= "Adèle Haenel";                                                a.description= "SUZANNE";                                                                                               a.save
  a = q.answers.new ; a.name= "Géraldine Pailhas";                                           a.description= "JEUNE & JOLIE";                                                                                         a.save
q.save; quiz.save

##########################################################


q = quiz.entries.new; q.name        = "Meilleur Acteur dans un Second Rôle"
  a = q.answers.new ; a.name= "Niels Arestrup";                                              a.description= "QUAI D'ORSAY";                                                                                          a.save
  a = q.answers.new ; a.name= "Patrick Chesnais";                                            a.description= "LES BEAUX JOURS";                                                                                       a.save
  a = q.answers.new ; a.name= "Patrick D'Assumçao";                                          a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "François Damiens";                                            a.description= "SUZANNE";                                                                                               a.save
  a = q.answers.new ; a.name= "Olivier Gourmet";                                             a.description= "GRAND CENTRAL";                                                                                         a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Espoir Féminin"
  a = q.answers.new ; a.name= "Lou de Laâge";                                                a.description= "JAPPELOUP";                                                                                             a.save
  a = q.answers.new ; a.name= "Pauline Etienne";                                             a.description= "LA RELIGIEUSE";                                                                                         a.save
  a = q.answers.new ; a.name= "Adèle Exarchopoulos";                                         a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
  a = q.answers.new ; a.name= "Golshifteh Farahani";                                         a.description= "SYNGUÉ SABOUR - PIERRE DE PATIENCE";                                                                    a.save
  a = q.answers.new ; a.name= "Marine Vacth";                                                a.description= "JEUNE & JOLIE ";                                                                                        a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Espoir Masculin"
  a = q.answers.new ; a.name= "Paul Bartel";                                                 a.description= "LES PETITS PRINCES";                                                                                    a.save
  a = q.answers.new ; a.name= "Pierre Deladonchamps";                                        a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Paul Hamy";                                                   a.description= "SUZANNE";                                                                                               a.save
  a = q.answers.new ; a.name= "Vincent Macaigne";                                            a.description= "LA FILLE DU 14 JUILLET";                                                                                a.save
  a = q.answers.new ; a.name= "Nemo Schiffman";                                              a.description= "ELLE S'EN VA";                                                                                          a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Scénario Original"
  a = q.answers.new ; a.name= "Albert Dupontel";                                             a.description= "9 MOIS FERME";                                                                                          a.save
  a = q.answers.new ; a.name= "Asghar Farhadi";                                              a.description= "LE PASSÉ";                                                                                              a.save
  a = q.answers.new ; a.name= "Alain Guiraudie";                                             a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Philippe le Guay";                                            a.description= "ALCESTE À BICYCLETTE";                                                                                  a.save
  a = q.answers.new ; a.name= "Katell Quillévéré, Mariette Désert";                          a.description= "SUZANNE";                                                                                               a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleure Adaptation"
  a = q.answers.new ; a.name= "Guillaume Gallienne";                                         a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Arnaud Desplechin,Kent Jones";                                a.description= "JIMMY P. (PSYCHOTHÉRAPIE D'UN INDIEN DES PLAINES)";                                                     a.save
  a = q.answers.new ; a.name= "Antonin Baudry, Christophe Blain, Bertrand Tavernier";        a.description= "QUAI D'ORSAY";                                                                                          a.save
  a = q.answers.new ; a.name= "David Ives, Roman Polanski";                                  a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
  a = q.answers.new ; a.name= "Abdellatif Kechiche, Ghalya Lacroix";                         a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleure Musique Originale"
  a = q.answers.new ; a.name= "Jorge Arriagada";                                             a.description= "ALCESTE À BICYCLETTE";                                                                                  a.save
  a = q.answers.new ; a.name= "Etienne Charry";                                              a.description= "L'ÉCUME DES JOURS";                                                                                     a.save
  a = q.answers.new ; a.name= "Alexandre Desplat";                                           a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
  a = q.answers.new ; a.name= "Loïk Dury, Christophe 'Disco' Minck";                         a.description= "CASSE-TÊTE CHINOIS";                                                                                    a.save
  a = q.answers.new ; a.name= "Martin Whee ler";                                             a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Son"
  a = q.answers.new ; a.name= "Marc-Antoine Beldent, Loïc Prian, Olivier Dô Hùu";            a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Philippe Grivel, Nathalie Vidal";                             a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Jean-Pierre Duret, Jean Mallet, Mélissa Petitjean";           a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
  a = q.answers.new ; a.name= "Lucien Balibar, Nadine Muse, Cyril Holtz";                    a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
  a = q.answers.new ; a.name= "Jérôme Chenevoy, Fabien Pochet, Jean-Paul Hurier";            a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleure Photo"
  a = q.answers.new ; a.name= "Sofian El Fani";                                              a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
  a = q.answers.new ; a.name= "Thomas Hardmeier";                                            a.description= "L'EXTRAVAGANT VOYAGE DU JEUNE ET PRODIGIEUX T.S. SPIVET";                                               a.save
  a = q.answers.new ; a.name= "Jeanne Lapoirie";                                             a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
  a = q.answers.new ; a.name= "Claire Mathon";                                               a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Mark Ping Bing Lee";                                          a.description= "RENOIR";                                                                                                a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Montage"
  a = q.answers.new ; a.name= "Valérie Deseine";                                             a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Jean-Christophe Hym";                                         a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Christophe Pinel";                                            a.description= "9 MOIS FERME";                                                                                          a.save
  a = q.answers.new ; a.name= "Juliette Welfling";                                           a.description= "LE PASSÉ";                                                                                              a.save
  a = q.answers.new ; a.name= "Camille Toubkis, Albertine Lastera, Jean-Marie Lengellé";     a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleurs Costumes"
  a = q.answers.new ; a.name= "Olivier Bériot";                                              a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Pascaline Chavanne";                                          a.description= "RENOIR";                                                                                                a.save
  a = q.answers.new ; a.name= "Anina Diener";                                                a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
  a = q.answers.new ; a.name= "Florence Fontaine";                                           a.description= "L'ÉCUME DES JOURS";                                                                                     a.save
  a = q.answers.new ; a.name= "Madeline Fontaine";                                           a.description= "L'EXTRAVAGANT VOYAGE DU JEUNE ET PRODIGIEUX T.S. SPIVET";                                               a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleurs Décors"
  a = q.answers.new ; a.name= "Yan Arlaud";                                                  a.description= "MICHAEL KOHLHAAS";                                                                                      a.save
  a = q.answers.new ; a.name= "Benoît Barouh";                                               a.description= "RENOIR";                                                                                                a.save
  a = q.answers.new ; a.name= "Aline Bonetto";                                               a.description= "L'EXTRAVAGANT VOYAGE DU JEUNE ET PRODIGIEUX T.S. SPIVET";                                               a.save
  a = q.answers.new ; a.name= "Sylvie Olivé";                                                a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Stéphane Rozenbaum";                                          a.description= "L'ÉCUME DES JOURS";                                                                                     a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Réalisateur"
  a = q.answers.new ; a.name= "Arnaud Desplechin";                                           a.description= "JIMMY P. (PSYCHOTHÉRAPIE D'UN INDIEN DES PLAINES)";                                                     a.save
  a = q.answers.new ; a.name= "Albert Dupontel";                                             a.description= "9 MOIS FERME";                                                                                          a.save
  a = q.answers.new ; a.name= "Asghar Farhadi";                                              a.description= "LE PASSÉ";                                                                                              a.save
  a = q.answers.new ; a.name= "Guillaume Gallienne";                                         a.description= "LES GARÇONS ET GUILLAUME, À TABLE !";                                                                   a.save
  a = q.answers.new ; a.name= "Alain Guiraudie";                                             a.description= "L'INCONNU DU LAC";                                                                                      a.save
  a = q.answers.new ; a.name= "Abdellatif Kechiche";                                         a.description= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                                                                        a.save
  a = q.answers.new ; a.name= "Roman Polanski";                                              a.description= "LA VÉNUS À LA FOURRURE";                                                                                a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Film de Court Métrage"
  a = q.answers.new ; a.name= "AVANT QUE DE TOUT PERDRE";                                    a.description= "réalisé par Xavier Legrand, produit par Alexandre Gavras";                                              a.save
  a = q.answers.new ; a.name= "BAMBI";                                                       a.description= "réalisé par Sébastien Lifshitz, produit par Carole Mirabello";                                          a.save
  a = q.answers.new ; a.name= "LA FUGUE";                                                    a.description= "réalisé par Jean-Bernard Marlin, produit par Valentine de Blignières";                                  a.save
  a = q.answers.new ; a.name= "LES LÉZARDS";                                                 a.description= "réalisé par Mariette Vincent, produit par Amaury Ovise";                                                a.save
  a = q.answers.new ; a.name= "MARSEILLE LA NUIT";                                           a.description= "réalisé par Marie Monge, produit par Sébastien Haguenauer";                                             a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Film d'Animation"
  a = q.answers.new ; a.name= "AYA DE YOPOUGON";                                             a.description= "réalisé par Marguerite Abouet, Clément Oubrerie, produit par Antoine Delesvaux, Joann Sfar, Clément Oubrerie"; a.save
  a = q.answers.new ; a.name= "LETTRES DE FEMMES";                                           a.description= "réalisé par Augusto Zanovello, produit par Gilbert Hus, Charles Malka, Luc Camilli, Dominique Deluze";  a.save
  a = q.answers.new ; a.name= "LOULOU L'INCROYABLE SECRET";                                  a.description= "réalisé par Eric Omond, produit par Valérie Schermann, Christophe Jankovic";                            a.save
  a = q.answers.new ; a.name= "MA MAMAN EST EN AMÉRIQUE, ELLE A RENCONTRÉ BUFFALO BILL";     a.description= "réalisé par Marc Boréal, Thibaut Chatel, produit par Guill aume Galliot, Thibaut Chatel";               a.save
  a = q.answers.new ; a.name= "MADEMOISELLE KIKI ET LES MONTPARNOS";                         a.description= "réalisé par Amélie Harrault, produit par Serge Elissalde, Olivier Catherin";                            a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Film Documentaire"
  a = q.answers.new ; a.name= "COMMENT J'AI DÉTESTÉ LES MATHS";                              a.description= "réalisé par Olivier Peyon, produit par Laurence Petit, Carole Scotta, Bruno Nahon";                     a.save
  a = q.answers.new ; a.name= "LE DERNIER DES INJUSTES";                                     a.description= "réalisé par Claude Lanzmann, produit par David Frenkel, Jean Labadie";                                  a.save
  a = q.answers.new ; a.name= "IL ÉTAIT UNE FORÊT";                                          a.description= "réalisé par Luc Jacqu et produit par Yves Darondeau, Christophe Lioud, Emmanuel Priou";                 a.save
  a = q.answers.new ; a.name= "LA MAISON DE LA RADIO";                                       a.description= "réalisé par Nicolas Philibert, produit par Serge Lalou";                                                a.save
  a = q.answers.new ; a.name= "SUR LE CHEMIN DE L'ÉCOLE";                                    a.description= "réalisé par Pascal Plisson, produit par Barthélémy Fougea";                                             a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Premier Film"
  a = q.answers.new ; a.name= "LA BATAILLE DE SOLFÉRINO";                                    a.description= "réalisé par Justine Triet, produit par Emmanuel Chaumet";                                               a.save
  a = q.answers.new ; a.name= "LA CAGE DORÉE";                                               a.description= "réalisé par Ruben Alves, produit par Hugo Gélin, Laetitia Galitzine, Danièle Delorme";                  a.save
  a = q.answers.new ; a.name= "EN SOLITAIRE";                                                a.description= "réalisé par Christophe Offenstein, produit par Sidonie Dumas, Jean Cottin, Laurent Taïeb";             a.save
  a = q.answers.new ; a.name= "LA FILLE DU 14 JUILLET";                                      a.description= "réalisé par Antonin Peretjatko, produit par Emmanuel Chaumet";                                          a.save
  a = q.answers.new ; a.name= "LES GARÇONS ET GUILLAUME, À TABLE !";                         a.description= "réalisé par Guillaume Gallienne, produit par Edouard Weil, Cyril Colbeau-Justin, Jean-Baptiste Dupont"; a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Film Étranger"
  a = q.answers.new ; a.name= "ALABAMA MONROE";                                              a.description= "réalisé par Félix Van Groeningen";                                                                      a.save
  a = q.answers.new ; a.name= "distribution France BODEGA FILMS";                            a.description= "BLANCANIEVES";                                                                                          a.save
  a = q.answers.new ; a.name= "réalisé par Pablo Berger";                                    a.description= "coproduction France NOODLES PRODUCTION (Jérôme Vidal)";                                                 a.save
  a = q.answers.new ; a.name= "BLUE JASMINE";                                                a.description= "réalisé par Woody Allen, distribution France MARS DISTRIBUTION";                                        a.save
  a = q.answers.new ; a.name= "DEAD MAN TALKING";                                            a.description= "réalisé par Patrick Ridremont, coproduction France SUPERPROD (Jérémie Fajner, Clément Calvet)";         a.save
  a = q.answers.new ; a.name= "DJANGO UNCHAINED";                                            a.description= "réalisé par Quentin Tarantino, distribution France SONY PICTURES RELEASING FRANCE";                     a.save
  a = q.answers.new ; a.name= "LA GRANDE BELLEZZA";                                          a.description= "réalisé par Paolo Sorrentino, coproduction France BABE FILMS (Fabio Conversi)";                         a.save
  a = q.answers.new ; a.name= "GRAVITY";                                                     a.description= "réalisé par Alfonso Cuarón, distribution France WARNER BROS";                                           a.save
q.save; quiz.save

##########################################################

q = quiz.entries.new; q.name        = "Meilleur Film"
  a = q.answers.new ; a.name= "9 MOIS FERME";                                                a.description= "produit par Catherine Bozorgan, réalisé par Albert Dupontel";                                           a.save
  a = q.answers.new ; a.name= "LES GARÇONS ET GUILLAUME, À TABLE !";                         a.description= "produit par Edouard Weil, Cyril Colbeau-Justin, Jean-Baptiste Dupont, réalisé par Guillaume Gallienne"; a.save
  a = q.answers.new ; a.name= "L'INCONNU DU LAC";                                            a.description= "produit par Sylvie Pialat, réalisé par Alain Guiraudie";                                                a.save
  a = q.answers.new ; a.name= "JIMMY P. (PSYCHOTHÉRAPIE D'UN INDIEN DES PLAINES)";           a.description= "produit par Pascal Caucheteux, Grégoire Sorlat, réalisé par Arnaud Desplechin";                         a.save
  a = q.answers.new ; a.name= "LE PASSÉ";                                                    a.description= "produit par Alexandre Mallet-Guy, réalisé par Asghar Farhadi";                                          a.save
  a = q.answers.new ; a.name= "LA VÉNUS À LA FOURRURE";                                      a.description= "produit par Robert Benmussa, Alain Sarde, réalisé par Roman Polanski";                                  a.save
  a = q.answers.new ; a.name= "LA VIE D'ADÈLE CHAPITRES 1 & 2";                              a.description= "produit par Abdellatif Kechiche, Vincent Maraval, Brahim Chioua, réalisé par Abdellatif Kechiche";      a.save
q.save; quiz.save

##########################################################
