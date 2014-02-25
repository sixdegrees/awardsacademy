quiz = Oahu::Model.find("5309dd8f873b0c55df0182db")
 
# actor-in-a-leading-role
q = quiz.entries.new; q.name = "Actor in a Leading Role"
  a = q.answers.new; a.name = "Christian Bale"                                                    ; a.description = "American Hustle";                                                                        a.save;
  a = q.answers.new; a.name = "Bruce Dern"                                                        ; a.description = "Nebraska";                                                                               a.save;
  a = q.answers.new; a.name = "Leonardo DiCaprio"                                                 ; a.description = "The Wolf of Wall Street";                                                                a.save;
  a = q.answers.new; a.name = "Chiwetel Ejiofor"                                                  ; a.description = "12 Years a Slave";                                                                       a.save;
  a = q.answers.new; a.name = "Matthew McConaughey"                                               ; a.description = "Dallas Buyers Club";                                                                     a.save;
q.save; quiz.save

# actress-in-a-leading-role
q = quiz.entries.new; q.name = "Actress, in a Leading Role"
  a = q.answers.new; a.name = "Amy Adams"                                                         ; a.description = "American Hustle";                                                                        a.save;
  a = q.answers.new; a.name = "Cate Blanchett"                                                    ; a.description = "Blue Jasmine";                                                                           a.save;
  a = q.answers.new; a.name = "Sandra Bullock"                                                    ; a.description = "Gravity";                                                                                a.save;
  a = q.answers.new; a.name = "Judi Dench"                                                        ; a.description = "Philomena";                                                                              a.save;
  a = q.answers.new; a.name = "Meryl Streep"                                                      ; a.description = "August: Osage County";                                                                   a.save;
q.save; quiz.save

# actor-in-a-supporting-role
q = quiz.entries.new; q.name = "Actor, in A Supporting Role"
  a = q.answers.new; a.name = "Barkhad Abdi"                                                      ; a.description = "Captain Phillips";                                                                       a.save;
  a = q.answers.new; a.name = "Bradley Cooper"                                                    ; a.description = "American Hustle";                                                                        a.save;
  a = q.answers.new; a.name = "Michael Fassbender"                                                ; a.description = "12 Years a Slave";                                                                       a.save;
  a = q.answers.new; a.name = "Jonah Hill"                                                        ; a.description = "The Wolf of Wall Street";                                                                a.save;
  a = q.answers.new; a.name = "Jared Leto"                                                        ; a.description = "Dallas Buyers Club";                                                                     a.save;
q.save; quiz.save

# actress-in-a-supporting-role
q = quiz.entries.new; q.name = "Actress, in a Supporting Role"
  a = q.answers.new; a.name = "Sally Hawkins"                                                     ; a.description = "Blue Jasmine";                                                                           a.save;
  a = q.answers.new; a.name = "Jennifer Lawrence"                                                 ; a.description = "American Hustle";                                                                        a.save;
  a = q.answers.new; a.name = "Lupita Nyong'o"                                                    ; a.description = "12 Years a Slave";                                                                       a.save;
  a = q.answers.new; a.name = "Julia Roberts"                                                     ; a.description = "August: Osage County";                                                                   a.save;
  a = q.answers.new; a.name = "June Squibb"                                                       ; a.description = "Nebraska";                                                                               a.save;
q.save; quiz.save

# animated-feature-film
q = quiz.entries.new; q.name = "Animated Feature Film"
  a = q.answers.new; a.name = "The Croods"                                                        ; a.description = "Chris Sanders, Kirk DeMicco and Kristine Belson";                                        a.save;
  a = q.answers.new; a.name = "Despicable Me 2"                                                   ; a.description = "Chris Renaud, Pierre Coffin and Chris Meledandri";                                       a.save;
  a = q.answers.new; a.name = "Ernest &amp; Celestine"                                            ; a.description = "Benjamin Renner and Didier Brunner";                                                     a.save;
  a = q.answers.new; a.name = "Frozen"                                                            ; a.description = "Chris Buck, Jennifer Lee and Peter Del Vecho";                                           a.save;
  a = q.answers.new; a.name = "The Wind Rises"                                                    ; a.description = "Hayao Miyazaki and Toshio Suzuki";                                                       a.save;
q.save; quiz.save

# cinematography
q = quiz.entries.new; q.name = "Cinematography"
  a = q.answers.new; a.name = "The Grandmaster"                                                   ; a.description = "Philippe Le Sourd";                                                                      a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Emmanuel Lubezki";                                                                       a.save;
  a = q.answers.new; a.name = "Inside Llewyn Davis"                                               ; a.description = "Bruno Delbonnel";                                                                        a.save;
  a = q.answers.new; a.name = "Nebraska"                                                          ; a.description = "Phedon Papamichael";                                                                     a.save;
  a = q.answers.new; a.name = "Prisoners"                                                         ; a.description = "Roger A. Deakins";                                                                       a.save;
q.save; quiz.save

# costume-design
q = quiz.entries.new; q.name = "Costume Design"
  a = q.answers.new; a.name = "American Hustle"                                                   ; a.description = "Michael Wilkinson";                                                                      a.save;
  a = q.answers.new; a.name = "The Grandmaster"                                                   ; a.description = "William Chang Suk Ping";                                                                 a.save;
  a = q.answers.new; a.name = "The Great Gatsby"                                                  ; a.description = "Catherine Martin";                                                                       a.save;
  a = q.answers.new; a.name = "The Invisible Woman"                                               ; a.description = "Michael O'Connor";                                                                       a.save;
  a = q.answers.new; a.name = "12 Years a Slave"                                                  ; a.description = "Patricia Norris";                                                                        a.save;
q.save; quiz.save

# directing
q = quiz.entries.new; q.name = "Directing"
  a = q.answers.new; a.name = "American Hustle"                                                   ; a.description = "David O. Russell";                                                                       a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Alfonso Cuarón";                                                                         a.save;
  a = q.answers.new; a.name = "Nebraska"                                                          ; a.description = "Alexander Payne";                                                                        a.save;
  a = q.answers.new; a.name = "12 Years a Slave"                                                  ; a.description = "Steve McQueen";                                                                          a.save;
  a = q.answers.new; a.name = "The Wolf of Wall Street"                                           ; a.description = "Martin Scorsese";                                                                        a.save;
q.save; quiz.save

# documentary-feature
q = quiz.entries.new; q.name = "Documentary Feature"
  a = q.answers.new; a.name = "The Act of Killing"                                                ; a.description = "Joshua Oppenheimer and Signe Byrge Sørensen";                                            a.save;
  a = q.answers.new; a.name = "Cutie and the Boxer"                                               ; a.description = "Zachary Heinzerling and Lydia Dean Pilcher";                                             a.save;
  a = q.answers.new; a.name = "Dirty Wars"                                                        ; a.description = "Richard Rowley and Jeremy Scahill";                                                      a.save;
  a = q.answers.new; a.name = "The Square"                                                        ; a.description = "Jehane Noujaim and Karim Amer";                                                          a.save;
  a = q.answers.new; a.name = "20 Feet from Stardom"                                              ; a.description = "Morgan Neville, Gil Friesen and Caitrin Rogers";                                         a.save;
q.save; quiz.save

# documentary-short-subject
q = quiz.entries.new; q.name = "Documentary Short Subject"
  a = q.answers.new; a.name = "CaveDigger"                                                        ; a.description = "Jeffrey Karoff";                                                                         a.save;
  a = q.answers.new; a.name = "Facing Fear"                                                       ; a.description = "Jason Cohen";                                                                            a.save;
  a = q.answers.new; a.name = "Karama Has No Walls"                                               ; a.description = "Sara Ishaq";                                                                             a.save;
  a = q.answers.new; a.name = "The Lady in Number 6: Music Saved My Life"                         ; a.description = "Malcolm Clarke and Nicholas Reed";                                                       a.save;
  a = q.answers.new; a.name = "Prison Terminal: The Last Days of Private Jack Hall"               ; a.description = "Edgar Barens";                                                                           a.save;
q.save; quiz.save

# film-editing
q = quiz.entries.new; q.name = "Film Editing"
  a = q.answers.new; a.name = "American Hustle"                                                   ; a.description = "Jay Cassidy, Crispin Struthers and Alan Baumgarten";                                     a.save;
  a = q.answers.new; a.name = "Captain Phillips"                                                  ; a.description = "Christopher Rouse";                                                                      a.save;
  a = q.answers.new; a.name = "Dallas Buyers Club"                                                ; a.description = "John Mac McMurphy and Martin Pensa";                                                     a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Alfonso Cuarón and Mark Sanger";                                                         a.save;
  a = q.answers.new; a.name = "12 Years a Slave"                                                  ; a.description = "Joe Walker";                                                                             a.save;
q.save; quiz.save

# foreign-language-film
q = quiz.entries.new; q.name = "Foreign Language Film"
  a = q.answers.new; a.name = "The Broken Circle Breakdown"                                       ; a.description = "Belgium";                                                                                a.save;
  a = q.answers.new; a.name = "The Great Beauty"                                                  ; a.description = "Italy";                                                                                  a.save;
  a = q.answers.new; a.name = "The Hunt"                                                          ; a.description = "Denmark";                                                                                a.save;
  a = q.answers.new; a.name = "The Missing Picture"                                               ; a.description = "Cambodia";                                                                               a.save;
  a = q.answers.new; a.name = "Omar"                                                              ; a.description = "Palestine";                                                                              a.save;
q.save; quiz.save

# makeup-and-hairstyling
q = quiz.entries.new; q.name = "Makeup and Hairstyling"
  a = q.answers.new; a.name = "Dallas Buyers Club"                                                ; a.description = "Adruitha Lee and Robin Mathews";                                                         a.save;
  a = q.answers.new; a.name = "Jackass Presents: Bad Grandpa"                                     ; a.description = "Stephen Prouty";                                                                         a.save;
  a = q.answers.new; a.name = "The Lone Ranger"                                                   ; a.description = "Joel Harlow and Gloria Pasqua-Casny";                                                    a.save;
q.save; quiz.save

# music-original-score
q = quiz.entries.new; q.name = "Music, Original Score"
  a = q.answers.new; a.name = "The Book Thief"                                                    ; a.description = "John Williams";                                                                          a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Steven Price";                                                                           a.save;
  a = q.answers.new; a.name = "Her"                                                               ; a.description = "William Butler and Owen Pallett";                                                        a.save;
  a = q.answers.new; a.name = "Philomena"                                                         ; a.description = "Alexandre Desplat";                                                                      a.save;
  a = q.answers.new; a.name = "Saving Mr. Banks"                                                  ; a.description = "Thomas Newman";                                                                          a.save;
q.save; quiz.save

# music-original-song
q = quiz.entries.new; q.name = "Music, Original Song"
  a = q.answers.new; a.name = "'Happy' from DESPICABLE ME 2"                                      ; a.description = "Music and Lyric by Pharrell Williams";                                                   a.save;
  a = q.answers.new; a.name = "'Let It Go' from FROZEN"                                           ; a.description = "Music and Lyric by Kristen Anderson-Lopez and Robert Lopez";                             a.save;
  a = q.answers.new; a.name = "'The Moon Song' from HER"                                          ; a.description = "Music by Karen O; Lyric by Karen O and Spike Jonze";                                     a.save;
  a = q.answers.new; a.name = "'Ordinary Love' from MANDELA: LONG WALK TO FREEDOM"                ; a.description = "Music by Paul Hewson, Dave Evans, Adam Clayton and Larry Mullen; Lyric by Paul Hewson";  a.save;
q.save; quiz.save

# production-design
q = quiz.entries.new; q.name = "Production Design"
  a = q.answers.new; a.name = "American Hustle"                                                   ; a.description = "Judy Becker (Production Design); Heather Loeffler (Set Decoration)";                     a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Andy Nicholson (Production Design); Rosie Goodwin and Joanne Woollard (Set Decoration)"; a.save;
  a = q.answers.new; a.name = "The Great Gatsby"                                                  ; a.description = "Catherine Martin (Production Design); Beverley Dunn (Set Decoration)";                   a.save;
  a = q.answers.new; a.name = "Her"                                                               ; a.description = "K.K. Barrett (Production Design); Gene Serdena (Set Decoration)";                        a.save;
  a = q.answers.new; a.name = "12 Years a Slave"                                                  ; a.description = "Adam Stockhausen (Production Design); Alice Baker (Set Decoration)";                     a.save;
q.save; quiz.save

# short-film-animated
q = quiz.entries.new; q.name = "Short Film, Animated"
  a = q.answers.new; a.name = "Feral"                                                             ; a.description = "Daniel Sousa and Dan Golden";                                                            a.save;
  a = q.answers.new; a.name = "Get a Horse!"                                                      ; a.description = "Lauren MacMullan and Dorothy McKim";                                                     a.save;
  a = q.answers.new; a.name = "Mr. Hublot"                                                        ; a.description = "Laurent Witz and Alexandre Espigares";                                                   a.save;
  a = q.answers.new; a.name = "Possessions"                                                       ; a.description = "Shuhei Morita";                                                                          a.save;
  a = q.answers.new; a.name = "Room on the Broom"                                                 ; a.description = "Max Lang and Jan Lachauer";                                                              a.save;
q.save; quiz.save

# short-film-live-action
q = quiz.entries.new; q.name = "Short Film, Live Action"
  a = q.answers.new; a.name = "Aquel No Era Yo (That Wasn't Me)"                                  ; a.description = "Esteban Crespo";                                                                         a.save;
  a = q.answers.new; a.name = "Avant Que De Tout Perdre (Just Before Losing Everything)"          ; a.description = "Xavier Legrand and Alexandre Gavras";                                                    a.save;
  a = q.answers.new; a.name = "Helium"                                                            ; a.description = "Anders Walter and Kim Magnusson";                                                        a.save;
  a = q.answers.new; a.name = "Pitääkö Mun Kaikki Hoitaa? (Do I Have to Take Care of Everything?)"; a.description = "Selma Vilhunen and Kirsikka Saari";                                                      a.save;
  a = q.answers.new; a.name = "The Voorman Problem"                                               ; a.description = "Mark Gill and Baldwin Li";                                                               a.save;
q.save; quiz.save

# sound-editing
q = quiz.entries.new; q.name = "Sound Editing"
  a = q.answers.new; a.name = "All Is Lost"                                                       ; a.description = "Steve Boeddeker and Richard Hymns";                                                      a.save;
  a = q.answers.new; a.name = "Captain Phillips"                                                  ; a.description = "Oliver Tarney";                                                                          a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Glenn Freemantle";                                                                       a.save;
  a = q.answers.new; a.name = "The Hobbit: The Desolation of Smaug"                               ; a.description = "Brent Burge and Chris Ward";                                                             a.save;
  a = q.answers.new; a.name = "Lone Survivor"                                                     ; a.description = "Wylie Stateman";                                                                         a.save;
q.save; quiz.save

# sound-mixing
q = quiz.entries.new; q.name = "Sound Mixing"
  a = q.answers.new; a.name = "Captain Phillips"                                                  ; a.description = "Chris Burdon, Mark Taylor, Mike Prestwood Smith and Chris Munro";                        a.save;
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Skip Lievsay, Niv Adiri, Christopher Benstead and Chris Munro";                          a.save;
  a = q.answers.new; a.name = "The Hobbit: The Desolation of Smaug"                               ; a.description = "Christopher Boyes, Michael Hedges, Michael Semanick and Tony Johnson";                   a.save;
  a = q.answers.new; a.name = "Inside Llewyn Davis"                                               ; a.description = "Skip Lievsay, Greg Orloff and Peter F. Kurland";                                         a.save;
  a = q.answers.new; a.name = "Lone Survivor"                                                     ; a.description = "Andy Koyama, Beau Borders and David Brownlow";                                           a.save;
q.save; quiz.save

# visual-effects
q = quiz.entries.new; q.name = "Visual Effects"
  a = q.answers.new; a.name = "Gravity"                                                           ; a.description = "Tim Webber, Chris Lawrence, David Shirk and Neil Corbould";                              a.save;
  a = q.answers.new; a.name = "The Hobbit: The Desolation of Smaug"                               ; a.description = "Joe Letteri, Eric Saindon, David Clayton and Eric Reynolds";                             a.save;
  a = q.answers.new; a.name = "Iron Man 3"                                                        ; a.description = "Christopher Townsend, Guy Williams, Erik Nash and Dan Sudick";                           a.save;
  a = q.answers.new; a.name = "The Lone Ranger"                                                   ; a.description = "Tim Alexander, Gary Brozenich, Edson Williams and John Frazier";                         a.save;
  a = q.answers.new; a.name = "Star Trek Into Darkness"                                           ; a.description = "Roger Guyett, Patrick Tubach, Ben Grossmann and Burt Dalton";                            a.save;
q.save; quiz.save

# writing-adapted-screenplay
q = quiz.entries.new; q.name = "Writing, Adapted Screenplay"
  a = q.answers.new; a.name = "Before Midnight"                                                   ; a.description = "Written by Richard Linklater, Julie Delpy, Ethan Hawke";                                 a.save;
  a = q.answers.new; a.name = "Captain Phillips"                                                  ; a.description = "Screenplay by Billy Ray";                                                                a.save;
  a = q.answers.new; a.name = "Philomena"                                                         ; a.description = "Screenplay by Steve Coogan and Jeff Pope";                                               a.save;
  a = q.answers.new; a.name = "12 Years a Slave"                                                  ; a.description = "Screenplay by John Ridley";                                                              a.save;
  a = q.answers.new; a.name = "The Wolf of Wall Street"                                           ; a.description = "Screenplay by Terence Winter";                                                           a.save;
q.save; quiz.save

# writing-original-screenplay
q = quiz.entries.new; q.name = "Original Screenplay"
  a = q.answers.new; a.name = "American Hustle"                                                   ; a.description = "Written by Eric Warren Singer and David O. Russell";                                     a.save;
  a = q.answers.new; a.name = "Blue Jasmine"                                                      ; a.description = "Written by Woody Allen";                                                                 a.save;
  a = q.answers.new; a.name = "Dallas Buyers Club"                                                ; a.description = "Written by Craig Borten &amp; Melisa Wallack";                                           a.save;
  a = q.answers.new; a.name = "Her"                                                               ; a.description = "Written by Spike Jonze";                                                                 a.save;
  a = q.answers.new; a.name = "Nebraska"                                                          ; a.description = "Written by Bob Nelson";                                                                  a.save;
q.save; quiz.save
