SELECT * FROM esercizio."Clienti" WHERE "Nome" = 'Mario';

SELECT * FROM esercizio."Clienti"
WHERE EXTRACT (YEAR FROM "AnnoDiNascita") = 1982;