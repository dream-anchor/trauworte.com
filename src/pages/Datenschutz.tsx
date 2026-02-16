import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";

const Datenschutz = () => {
  usePrerenderReady(true);
  const cms = usePageContent("datenschutzerklaerung");

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Datenschutzerklärung | TrauWorte"}
        description={cms.seoDescription || "Datenschutzerklärung von TrauWorte – Freie Rednerin Stefanie Sick. Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO."}
        canonical={cms.seoCanonical || "/datenschutzerklaerung"}
        noIndex
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Datenschutz", url: "/datenschutzerklaerung/" },
        ]}
      />

      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8956A",
              marginBottom: "20px",
            }}
          >
            Rechtliches
          </p>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
            }}
          >
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <div className="space-y-8 font-body" style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>

            {/* 1. Datenschutz auf einen Blick */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit euren
                personenbezogenen Daten passiert, wenn ihr meine Website besucht. Personenbezogene
                Daten sind alle Daten, mit denen ihr persönlich identifiziert werden könnt.
                Ausführliche Informationen zum Thema Datenschutz entnehmt ihr der nachfolgenden
                Datenschutzerklärung.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Datenerfassung auf meiner Website
              </h3>
              <p><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch die Websitebetreiberin.
                Deren Kontaktdaten könnt ihr dem Abschnitt „Hinweis zur verantwortlichen Stelle"
                in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="mt-4"><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Wie erfasse ich eure Daten?</strong></p>
              <p>
                Eure Daten werden zum einen dadurch erhoben, dass ihr mir diese mitteilt. Hierbei
                kann es sich z. B. um Daten handeln, die ihr in ein Kontaktformular eingebt.
                Andere Daten werden automatisch oder nach eurer Einwilligung beim Besuch der Website
                durch meine IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald ihr meine Website betretet.
              </p>

              <p className="mt-4"><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Wofür nutze ich eure Daten?</strong></p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse eures Nutzerverhaltens verwendet werden.
              </p>

              <p className="mt-4"><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Welche Rechte habt ihr bezüglich eurer Daten?</strong></p>
              <p>
                Ihr habt jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck eurer gespeicherten personenbezogenen Daten zu erhalten. Ihr habt außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn ihr eine
                Einwilligung zur Datenverarbeitung erteilt habt, könnt ihr diese Einwilligung jederzeit
                für die Zukunft widerrufen. Außerdem habt ihr das Recht, unter bestimmten Umständen die
                Einschränkung der Verarbeitung eurer personenbezogenen Daten zu verlangen. Des Weiteren
                steht euch ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="mt-2">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz könnt ihr euch jederzeit an mich wenden.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 2. Hosting */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                2. Hosting
              </h2>
              <p>
                Meine Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
                werden, handeln.
              </p>
              <p className="mt-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber meinen
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung meines Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-4">
                Mein Hoster wird eure Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                Leistungspflichten erforderlich ist, und meine Weisungen in Bezug auf diese Daten
                befolgen.
              </p>
              <p className="mt-4">Ich setze folgenden Hoster ein:</p>
              <p className="mt-2">
                GitHub, Inc.<br />
                88 Colin P Kelly Jr St<br />
                San Francisco, CA 94107, USA
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Auftragsverarbeitung
              </h3>
              <p>
                Ich habe einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten
                Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen
                Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten meiner Websitebesucher
                nur nach meinen Weisungen und unter Einhaltung der DSGVO verarbeitet.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 3. Allgemeine Hinweise */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Datenschutz
              </h3>
              <p>
                Ich nehme den Schutz eurer persönlichen Daten sehr ernst. Ich behandle eure
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-4">
                Wenn ihr diese Website benutzt, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen ihr persönlich identifiziert werden könnt.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten ich erhebe und wofür ich
                sie nutze. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p className="mt-4">
                Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
                per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">
                Stefanie Sick<br />
                c/o B. Erdmann<br />
                Karlstr. 54<br />
                80333 München
              </p>
              <p className="mt-2">
                Telefon: +49 1520 4170255<br />
                E-Mail: <ObfuscatedEmail style={{ color: "#B8956A", textDecoration: "underline" }} />
              </p>
              <p className="mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Speicherdauer
              </h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben eure personenbezogenen Daten bei mir, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn ihr ein berechtigtes Löschersuchen geltend macht
                oder eine Einwilligung zur Datenverarbeitung widerruft, werden eure Daten gelöscht,
                sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung eurer
                personenbezogenen Daten habe (z. B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                dieser Gründe.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              </h3>
              <p>
                Sofern ihr in die Datenverarbeitung eingewilligt habt, verarbeite ich eure
                personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw.
                Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9
                Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die
                Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
                Sofern ihr in die Speicherung von Cookies oder in den Zugriff auf Informationen
                in eurem Endgerät (z. B. via Device-Fingerprinting) eingewilligt habt, erfolgt die
                Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung
                ist jederzeit widerrufbar. Sind eure Daten zur Vertragserfüllung oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, verarbeite ich eure Daten auf Grundlage des
                Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeite ich eure Daten, sofern diese zur
                Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von
                Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage meines
                berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils
                im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser
                Datenschutzerklärung informiert.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Empfänger von personenbezogenen Daten
              </h3>
              <p>
                Im Rahmen meiner Geschäftstätigkeit arbeite ich mit verschiedenen externen Stellen
                zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an
                diese externen Stellen erforderlich. Ich gebe personenbezogene Daten nur an externe
                Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn ich
                gesetzlich hierzu verpflichtet bin (z. B. Weitergabe von Daten an Steuerbehörden),
                wenn ich ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
                habe oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
                von Auftragsverarbeitern gebe ich personenbezogene Daten meiner Kunden nur auf Grundlage
                eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Widerruf eurer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit eurer ausdrücklichen Einwilligung möglich.
                Ihr könnt eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)
              </h3>
              <p style={{ fontWeight: 500, color: "#1a1a1a", textTransform: "uppercase", fontSize: "13px" }}>
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. E oder F DSGVO erfolgt,
                habt ihr jederzeit das Recht, aus Gründen, die sich aus eurer besonderen Situation ergeben,
                gegen die Verarbeitung eurer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch
                für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf
                denen eine Verarbeitung beruht, entnehmt ihr dieser Datenschutzerklärung.
              </p>
              <p className="mt-4" style={{ fontWeight: 500, color: "#1a1a1a", textTransform: "uppercase", fontSize: "13px" }}>
                Wenn ihr Widerspruch einlegt, werde ich eure betroffenen personenbezogenen Daten nicht
                mehr verarbeiten, es sei denn, ich kann zwingende schutzwürdige Gründe für die
                Verarbeitung nachweisen, die eure Interessen, Rechte und Freiheiten überwiegen oder
                die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
              <p className="mt-4" style={{ fontWeight: 500, color: "#1a1a1a", textTransform: "uppercase", fontSize: "13px" }}>
                Werden eure personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so habt
                ihr das Recht, jederzeit Widerspruch gegen die Verarbeitung euch betreffender
                personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht (Widerspruch
                nach Art. 21 Abs. 2 DSGVO).
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das
                Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
              <p className="mt-2">Die zuständige Aufsichtsbehörde ist:</p>
              <p className="mt-2">
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                Promenade 18<br />
                91522 Ansbach<br />
                Telefon: +49 (0) 981 180093-0<br />
                E-Mail: poststelle@lda.bayern.de<br />
                Website:{" "}
                <a
                  href="https://www.lda.bayern.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#B8956A", textDecoration: "underline" }}
                >
                  https://www.lda.bayern.de
                </a>
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Recht auf Datenübertragbarkeit
              </h3>
              <p>
                Ihr habt das Recht, Daten, die ich auf Grundlage eurer Einwilligung oder in Erfüllung
                eines Vertrags automatisiert verarbeite, an euch oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern ihr die direkte Übertragung der
                Daten an einen anderen Verantwortlichen verlangt, erfolgt dies nur, soweit es technisch
                machbar ist.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Auskunft, Berichtigung und Löschung
              </h3>
              <p>
                Ihr habt im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über eure gespeicherten personenbezogenen Daten, deren Herkunft
                und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                Daten könnt ihr euch jederzeit an mich wenden.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p>
                Ihr habt das Recht, die Einschränkung der Verarbeitung eurer personenbezogenen Daten
                zu verlangen. Hierzu könnt ihr euch jederzeit an mich wenden. Das Recht auf
                Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Wenn ihr die Richtigkeit eurer bei mir gespeicherten personenbezogenen Daten bestreitet,
                  benötige ich in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung habt ihr
                  das Recht, die Einschränkung der Verarbeitung eurer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung eurer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                  könnt ihr statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn ich eure personenbezogenen Daten nicht mehr benötige, ihr sie jedoch zur Ausübung,
                  Verteidigung oder Geltendmachung von Rechtsansprüchen benötigt, habt ihr das Recht,
                  statt der Löschung die Einschränkung der Verarbeitung eurer personenbezogenen Daten
                  zu verlangen.
                </li>
                <li>
                  Wenn ihr einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt habt, muss eine Abwägung
                  zwischen euren und meinen Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen überwiegen, habt ihr das Recht, die Einschränkung der Verarbeitung
                  eurer personenbezogenen Daten zu verlangen.
                </li>
              </ul>
              <p className="mt-4">
                Wenn ihr die Verarbeitung eurer personenbezogenen Daten eingeschränkt habt, dürfen
                diese Daten — von ihrer Speicherung abgesehen — nur mit eurer Einwilligung oder zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
                wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
                verarbeitet werden.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte, wie zum Beispiel Anfragen, die ihr an mich als Seitenbetreiberin sendet, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennt ihr daran, dass
                die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
                Schloss-Symbol in eurer Browserzeile.
              </p>
              <p className="mt-4">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die ihr an
                mich übermittelt, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 4. Datenerfassung */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                4. Datenerfassung auf meiner Website
              </h2>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Server-Log-Dateien
              </h3>
              <p>
                Der Provider meiner Website erhebt und speichert automatisch Informationen in
                sogenannten Server-Log-Dateien, die euer Browser automatisch an den Server
                übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p className="mt-4">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Ich habe ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und
                der Optimierung meiner Website — hierzu müssen die Server-Log-Dateien erfasst werden.
              </p>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Kontaktformular
              </h3>
              <p>
                Wenn ihr mir per Kontaktformular Anfragen zukommen lasst, werden eure Angaben aus dem
                Anfrageformular inklusive der von euch dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe
                ich nicht ohne eure Einwilligung weiter.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern eure Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven
                Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-4">
                Die von euch im Kontaktformular eingegebenen Daten verbleiben bei mir, bis ihr mich zur
                Löschung auffordert, eure Einwilligung zur Speicherung widerruft oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung eurer Anfrage).
                Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>
              <p className="mt-4">Im Kontaktformular werden folgende Daten erhoben:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Euer Name (Pflichtfeld)</li>
                <li>E-Mail-Adresse (Pflichtfeld)</li>
                <li>Wunschdatum der Hochzeit (freiwillig)</li>
                <li>Nachricht (freiwillig)</li>
              </ul>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Anfrage per E-Mail oder Telefon
              </h3>
              <p>
                Wenn ihr mich per E-Mail oder Telefon kontaktiert, wird eure Anfrage inklusive aller
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                eures Anliegens bei mir gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne
                eure Einwilligung weiter.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern eure Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven
                Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                eurer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
              </p>
              <p className="mt-4">
                Die von euch an mich per Kontaktanfrage übersandten Daten verbleiben bei mir, bis ihr
                mich zur Löschung auffordert, eure Einwilligung zur Speicherung widerruft oder der
                Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen —
                insbesondere gesetzliche Aufbewahrungsfristen — bleiben unberührt.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 5. Cookies */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                5. Cookies
              </h2>
              <p>
                Meine Website verwendet sogenannte „Cookies". Cookies sind kleine Datenpakete und
                richten auf eurem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
                die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
                eurem Endgerät gespeichert. Session-Cookies werden nach Ende eures Besuchs automatisch
                gelöscht. Permanente Cookies bleiben auf eurem Endgerät gespeichert, bis ihr sie selbst
                löscht oder eine automatische Löschung durch euren Webbrowser erfolgt.
              </p>
              <p className="mt-4">
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
                Bereitstellung bestimmter, von euch erwünschter Funktionen oder zur Optimierung
                der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige
                Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG
                gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Ich habe ein
                berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
                fehlerfreien und optimierten Bereitstellung meiner Dienste.
              </p>
              <p className="mt-4">
                Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
                Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG);
                die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="mt-4">
                Ihr könnt euren Browser so einstellen, dass ihr über das Setzen von Cookies informiert
                werdet, und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
                Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim
                Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                Funktionalität dieser Website eingeschränkt sein.
              </p>
              <p className="mt-4" style={{ fontWeight: 500, color: "#1a1a1a" }}>
                Diese Website verwendet aktuell ausschließlich technisch notwendige Cookies. Es werden
                keine Tracking-Cookies oder Cookies zu Werbezwecken eingesetzt.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 6. Externe Dienste */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                6. Externe Dienste und Inhalte
              </h2>

              <h3 className="font-display mt-5 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Google Fonts (lokales Hosting)
              </h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google
                Fonts, die lokal auf dem Server gehostet werden. Es findet keine Verbindung zu
                Servern von Google statt. Somit werden keine Daten an Google übertragen.
              </p>
              <p className="mt-4">
                Weitere Informationen zu Google Fonts findet ihr unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#B8956A", textDecoration: "underline" }}
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#B8956A", textDecoration: "underline" }}
                >
                  https://policies.google.com/privacy
                </a>.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 7. Auftragsverarbeitung */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                7. Auftragsverarbeitung
              </h2>
              <p>
                Ich habe mit meinem Hoster einen Vertrag zur Auftragsverarbeitung (AVV) gemäß
                Art. 28 DSGVO geschlossen. Dieser stellt sicher, dass mein Hoster die
                personenbezogenen Daten meiner Websitebesucher nur nach meinen Weisungen und unter
                Einhaltung der DSGVO verarbeitet.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* 8. Hinweis c/o */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                8. Hinweis zur c/o-Adresse
              </h2>
              <p>
                Im Impressum und in dieser Datenschutzerklärung ist eine c/o-Adresse angegeben.
                An dieser Adresse wird Post für mich zuverlässig entgegengenommen und an mich
                weitergeleitet. Ich bin unter dieser Anschrift postalisch erreichbar. Die Adresse
                ist ladungsfähig im Sinne des § 5 DDG.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
