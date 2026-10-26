# DICOM till 3D

En webbaserad app för att skapa 3D-modeller från DICOM-bildserier, till exempel från DT-skanningar av föremål.

**[Öppna DICOM till 3D](https://morgansundsvallmakers.github.io/dicom-till-3d/)**

Appen bygger på det öppna projektet [DicomDrift](https://github.com/MenzelRobin/DicomDrift) av Robin Menzel och har anpassats med ett svenskt användargränssnitt.

## Vad kan appen göra?

- Läsa in en lokal mapp med DICOM-filer.
- Identifiera bildserier och bygga en 3D-volym.
- Skapa en 3D-yta med Marching Cubes.
- Justera tröskelvärde (HU), upplösning och utjämning.
- Visa och rotera modellen i webbläsaren.
- Exportera modellen som STL, exempelvis för 3D-utskrift.
- Spara en bearbetad modell som `.dicomdrift` och öppna den igen.
- Spara en bild av 3D-vyn.

## Så använder du appen

1. Öppna [webbappen](https://morgansundsvallmakers.github.io/dicom-till-3d/).
2. Klicka på **Välj DICOM-mapp** och välj mappen med bildfilerna. Dra-och-släpp av mappar stöds inte för närvarande.
3. Om flera bildserier finns väljer du vilken som ska behandlas.
4. Undersök 3D-modellen och justera inställningarna vid behov.
5. Välj **Exportera STL** för att spara modellen på datorn.

**Spara modell** skapar i stället en `.dicomdrift`-fil som senare kan öppnas via **Öppna sparad modell**. Den är avsedd för att återuppta arbete med en bearbetad modell, inte för att ersätta originalets DICOM-filer.

## Lokal bearbetning och integritet

DICOM-inläsning och 3D-rekonstruktion sker lokalt i webbläsaren. Appen använder ingen egen server för att ladda upp eller bearbeta bilddata.

Automatisk lagring av rekonstruerade modeller har tagits bort. Tidigare sessionsdata i IndexedDB försöker rensas när appen startar. Modeller sparas som filer endast när användaren väljer en export- eller sparfunktion.

**Viktigt:** En fullständig säkerhetsgranskning, inklusive verifiering av nätverkstrafik och beroenden, har inte genomförts. Använd därför inte patientuppgifter eller annan känslig information utan verksamhetens säkerhetsbedömning och godkännande.

## Status och begränsningar

En första användbar version finns publicerad på GitHub Pages. Den har provats med en syntetisk DICOM-serie av en cylinder med genomgående hål och med en mer komplex volym. Det visar att grundläggande inläsning och rekonstruktion fungerar, men utgör inte en systematisk validering.

- Måttnoggrannhet och ytjämnhet för exporterade STL-modeller är ännu inte verifierade.
- Alla DICOM-varianter och komprimerade format stöds inte nödvändigtvis.
- Stora bildserier kan kräva mycket minne och processorkraft.
- Verktyget är avsett för teknisk modellframställning, **inte för medicinsk diagnostik eller kliniska beslut**.

## Teknik

React, TypeScript, Vite och Three.js. Beräkningarna utförs lokalt, bland annat med Web Workers. Publicering sker via GitHub Actions och GitHub Pages.

För lokal utveckling:

```bash
npm ci
npm run dev
```

För att kontrollera och bygga:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Ursprung och licens

Det här projektet är en vidareutveckling av **[DicomDrift](https://github.com/MenzelRobin/DicomDrift)** av **Robin Menzel**. Stort tack för att källkoden har publicerats öppet och går att bygga vidare på.

DicomDrift distribueras under **MIT-licensen**. Den ursprungliga upphovsrättsnotisen, `Copyright (c) 2026 Robin Menzel`, och licensvillkoren återges i [LICENSE](LICENSE).
