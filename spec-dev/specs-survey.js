module.exports = {
    example1_bar: {
        "title": "Basic Marks: bar",
        "subtitle": "Tutorial Examples",
        "tracks": [
          {
            "layout": "linear",
            "width": 800,
            "height": 180,
            "data": {
              "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1"],
              "binSize": 5
            },
            "mark": "bar",
            "x": {"field": "start", "type": "genomic", "axis": "bottom"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"field": "peak", "type": "quantitative", "axis": "right"},
            "size": {"value": 5}
          }
        ]
      },

    example2_heatmap: {
        "title": "Heatmap",
        "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
        "tracks": [
          {
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
              "binSize": 4
            },
            "mark": "rect",
            "x": {"field": "start", "type": "genomic", "axis": "top"},
            "xe": {"field": "end", "type": "genomic"},
            "row": {"field": "sample", "type": "nominal", "legend": true},
            "color": {"field": "peak", "type": "quantitative", "legend": true}
          }
        ]
      },

    
    example3_ideogram_simple: {
        "tracks": [
          {
            "width": 800,
            "height": 40,
            "data": {
              "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
              "type": "csv",
              "chromosomeField": "Chromosome",
              "genomicFields": ["chromStart", "chromEnd"]
            },
            "mark": "rect",
            "dataTransform": [
              {"type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true}
            ],
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
              "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
            },
            "x": {
              "field": "chromStart",
              "type": "genomic",
              "domain": {"chromosome": "chr1"},
              "axis": "top"
            },
            "xe": {"field": "chromEnd", "type": "genomic"},
            "size": {"value": 20},
            "stroke": {"value": "gray"},
            "strokeWidth": {"value": 0.5},
            "style": {"outline": "white"}
          }
        ]
      },

    example4_text: {
        "title": "Basic Marks: Text",
        "subtitle": "Tutorial Examples",
        "tracks": [
          {
            "width": 800,
            "height": 180,
            "data": {
              "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
              "type": "multivec",
              "row": "base",
              "column": "position",
              "value": "count",
              "categories": ["A", "T", "G", "C"],
              "start": "start",
              "end": "end",
              "binSize": 16
            },
            "mark": "text",
            "y": {"field": "count", "type": "quantitative"},
            "style": {"textStrokeWidth": 0},
            "stretch": true,
            "x": {"field": "start", "type": "genomic", "axis": "top"},
            "xe": {"field": "end", "type": "genomic"},
            "color": {
              "field": "base",
              "type": "nominal",
              "domain": ["A", "T", "G", "C"]
            },
            "text": {"field": "base", "type": "nominal"}
          }
        ]
      },
    
    example5_rule_mark: {
        "title": "Rule Mark",
        "subtitle": "Annotate visualization with horizontal and vertical lines",
        "style": {"dashed": [3, 3]},
        "views": [
          {
            "alignment": "overlay",
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1"],
                  "binSize": 4
                },
                "mark": "bar",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative", "domain": [0, 0.003]},
                "color": {"value": "lightgray"}
              },
              {
                "data": {
                  "type": "json",
                  "values": [
                    {"c": "chr2", "p": 100000, "v": 0.0001},
                    {"c": "chr5", "p": 100000, "v": 0.0004},
                    {"c": "chr10", "p": 100000, "v": 0.0009}
                  ],
                  "chromosomeField": "c",
                  "genomicFields": ["p"]
                },
                "mark": "rule",
                "x": {"field": "p", "type": "genomic"},
                "y": {"field": "v", "type": "quantitative", "domain": [0, 0.003]},
                "strokeWidth": {"field": "v", "type": "quantitative"},
                "color": {"value": "red"}
              },
              {
                "data": {
                  "type": "json",
                  "values": [
                    {"c": "chr2", "p": 100000, "v": 0.0001},
                    {"c": "chr5", "p": 100000, "v": 0.0004},
                    {"c": "chr10", "p": 100000, "v": 0.0009}
                  ],
                  "chromosomeField": "c",
                  "genomicFields": ["p"]
                },
                "mark": "rule",
                "x": {"field": "p", "type": "genomic"},
                "strokeWidth": {"value": 2},
                "color": {"value": "blue"}
              }
            ],
            "width": 500,
            "height": 200
          }
        ]
      },

    example6_circos: {
        "title": "Circos",
        "description": "http://circos.ca/intro/genomic_data/",
        "layout": "circular",
        "static": true,
        "spacing": 1,
        "centerRadius": 0.3,
        "alignment": "stack",
        "tracks": [
          {
            "data": {
              "type": "vector",
              "url": "https://resgen.io/api/v1/tileset_info/?d=VLFaiSVjTjW6mkbjRjWREA",
              "column": "position",
              "value": "peak"
            },
            "mark": "bar",
            "x": {"field": "position", "type": "genomic", "axis": "top"},
            "y": {"field": "peak", "type": "quantitative", "axis": "right"},
            "color": {"value": "#EEEDA1"},
            "width": 700,
            "height": 60
          },
          {
            "data": {
              "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
              "type": "csv",
              "chromosomeField": "Chromosome",
              "genomicFields": ["chromStart", "chromEnd"]
            },
            "mark": "rect",
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": [
                "gneg",
                "gpos25",
                "gpos50",
                "gpos75",
                "gpos100",
                "gvar",
                "acen"
              ],
              "range": [
                "white",
                "#D9D9D9",
                "#979797",
                "#636363",
                "black",
                "#F0F0F0",
                "#8D8D8D"
              ]
            },
            "x": {"field": "chromStart", "type": "genomic"},
            "xe": {"field": "chromEnd", "type": "genomic"},
            "stroke": {"value": "lightgray"},
            "strokeWidth": {"value": 0.5},
            "width": 700,
            "height": 30
          },
          {
            "alignment": "overlay",
            "data": {
              "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
              "type": "csv",
              "headerNames": ["id", "chr", "p1", "p2"],
              "chromosomePrefix": "hs",
              "chromosomeField": "chr",
              "genomicFields": ["p1", "p2"],
              "separator": " ",
              "longToWideId": "id"
            },
            "opacity": {"value": 0.4},
            "tracks": [
              {
                "dataTransform": [
                  {"type": "filter", "field": "chr", "oneOf": ["hs1"], "not": true}
                ],
                "mark": "withinLink",
                "x": {"field": "p1", "type": "genomic"},
                "xe": {"field": "p1_2", "type": "genomic"},
                "x1": {"field": "p2", "type": "genomic"},
                "x1e": {"field": "p2_2", "type": "genomic"},
                "stroke": {"value": "lightgray"},
                "strokeWidth": {"value": 1}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "chr", "oneOf": ["hs1"]}
                ],
                "mark": "withinLink",
                "x": {"field": "p1", "type": "genomic"},
                "xe": {"field": "p1_2", "type": "genomic"},
                "x1": {"field": "p2", "type": "genomic"},
                "x1e": {"field": "p2_2", "type": "genomic"},
                "stroke": {
                  "field": "chr_2",
                  "type": "nominal",
                  "range": [
                    "#E79F00",
                    "#029F73",
                    "#0072B2",
                    "#CB7AA7",
                    "#D45E00",
                    "#57B4E9",
                    "#EFE441"
                  ]
                },
                "strokeWidth": {"value": 1.5}
              }
            ],
            "width": 700,
            "height": 300
          }
        ]
      }

         
}