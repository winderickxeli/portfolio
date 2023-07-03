# Prometheus en Zabbix
Zabbix kan heel veel, ook verbinden met de Prometheus clients; `node_exporter` en `blackbox_exporter`. Beide clients bieden namelijk via TCP-poort data aan die Prometheus kan scrapen (`node_exporter`: 9100 en blackbox_exporter: 9115). Zabbix kan dan via `HTTP-item` de metrics ophalen. Hiervoor moeten we eerst een Host aanmaken. Deze dient als placeholder en moet buiten een beduidende naam, geen relevante informatie bevatten.

## Het master-item
Het belangrijkste zit in de master-item.  Deze gaat namelijk via een `HTTP-item` de pull doen naar de `node_exporter` host.  Net als bij de Prometheus server krijgen we ineens alle data binnen van de host. Zabbix kan daarna extra `Dependant items` maken op basis van verschillende entries in het `master`-item. Geef het adres van de host in onder URL en vervolledig met `:9100/metrics`. Voor testdoeleinden kan het interessant zijn om even geschiedenis bij te houden maar daarnaast is dit heel veel data die we niet moeten bijhouden en dus kunnen we onder `history storage period` 0 zetten. Let daarnaast dat `Type of information` Text is.

![Prometheus item in Zabbix](/images/ZabbixProm/ZabbixProm1.png)

## Dependant item
Nu het `master`-item aangevuld wordt, kunnen we een nieuw item aanmaken en die van het type `Dependant item` maken. De naam en key moeten zoals steeds uniek zijn en onder `master`-item kunnen we het item van zonet hier aanvullen.

![Dependant item in Zabbix](/images/ZabbixProm/ZabbixProm2.png)

Onder het tab `Preprocessing` gebeurt nu het interessante en gaan we aangeven welke waarde we uit ons Master-item willen halen. In deze context kunnen we enkel gebruik maken van `keys` en `values` en hebben we dus echt enkel de specifieke metrix die we ophalen.

![Preprocessing in Zabbix](/images/ZabbixProm/ZabbixProm3.png)

## Low-level Discovery
Via LLD kunnen we iets gemakkelijker verschillende items op een geautomatiseerde manier ophalen. We hebben nog steeds ons `master`-item nodig als vertrekpunt. Hierna kunnen we enkele leuke zaken definiëren. Nadat we Naam, key en `master`-item hebben opgegeven, kunnen we naar `Preprocessing` gaan en daar `Prometheus to JSON` selecteren. Als Parameter kunnen we nu een `Prometheus pattern` ingeven alsook wat regex om enkele zaken variabel te laten opvullen.

![Preprocessing Low-Level Discovery in Zabbix](/images/ZabbixProm/ZabbixProm4.png)

Hieronder een voorbeeld van zo’n JSON verwerking
````JSON
[
    {
        "name": "wmi_logical_disk_free_bytes",
        "help": "Free space in bytes (LogicalDisk.PercentFreeSpace)",
        "type": "gauge",
        "labels": {
            "volume": "C:"
         },
        "value": "3.5180249088e+11",
        "line_raw": "wmi_logical_disk_free_bytes{volume=\"C:\"} 3.5180249088e+11"
    },
    {
        "name": "wmi_logical_disk_free_bytes",
        "help": "Free space in bytes (LogicalDisk.PercentFreeSpace)",
        "type": "gauge",
        "labels": {
            "volume": "D:"
         },
        "value": "2.627731456e+09",
        "line_raw": "wmi_logical_disk_free_bytes{volume=\"D:\"} 2.627731456e+09"
    },
    {
        "name": "wmi_logical_disk_free_bytes",
        "help": "Free space in bytes (LogicalDisk.PercentFreeSpace)",
        "type": "gauge",
        "labels": {
            "volume": "HarddiskVolume4"
         },
        "value": "4.59276288e+08",
        "line_raw": "wmi_logical_disk_free_bytes{volume=\"HarddiskVolume4\"} 4.59276288e+08"
    }
]
````

In bovenstaand voorbeeld kunnen we enkele waarden terugvinden zoals `name`, `help` en `labels`. Onder `line_raw` zien we de effectieve lijn die Zabbix heeft ontvangen uit de `node_exporter`. Afhankelijk van welke data we willen opvragen, gaan we ook andere Macro’s willen aanmaken. In bovenstaand voorbeeld zal dat {#METRIC}, {#HELP} en {#VOLUME} zijn.
{#VOLUME}=$.labels['volume']
{#METRIC}=$['name']
{#HELP}=$['help']



Tot slot kunnen we nu een `prototype item` aanmaken. Door de LLD Macro’s, kunnen we nu eenvoudig unieke waardes genereren. Onder Preprocessing, kunnen we dan opnieuw die Macro’s gebruiken om de juiste waarde te selecteren.

![Dependant LLD item in Zabbix](/images/ZabbixProm/ZabbixProm5.png)
![Preprocessing LLD item in Zabbix](/images/ZabbixProm/ZabbixProm6.png)