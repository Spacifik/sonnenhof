Die hier hinterlegten Daten können benutzt werden, um die App direkt zu gestalten.

die generischen Daten, welche die EmptyPage component benutzen, laden den text,
description und content direct aus den hier auf dem entsprechenden pfad angelgten
ts Dateien. Bsp:

/pages/career/index.tsx renders EmptyPage
/data/career/text.ts wird geladen und als content angezeigt.

Das erlaubt die editierung des Textes "im laufenden betrieb", ohne einzelne seiten
anlegen zu müssen und dann mühsam später daten und page auseinander klabustern zu
müssen.
