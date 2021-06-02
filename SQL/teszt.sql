SELECT diak.nev
FROM diak
WHERE diak.evfolyam = (
        SELECT
            mu.evfolyam
        FROM
            mu
        WHERE
            mu.cim = "Anna Karenina"
    )
    AND diak.az NOT IN (
        SELECT
            diak.az
        FROM
            (
                mu
                INNER JOIN peldany ON mu.az = peldany.muaz
            )
            INNER JOIN (
                diak
                INNER JOIN kolcsonzes ON diak.az = kolcsonzes.diakaz
            ) ON peldany.az = kolcsonzes.peldanyaz
        WHERE
            (((mu.cim) = "Anna Karenina"))
    );