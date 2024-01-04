
# Dynamic Forms in Angular


![Examples](https://github.com/alikarakoc/DynamicFormsInAngular/assets/16520480/7a25589d-dc11-45e4-8448-3f057fbbfafd)


## Data.json

| Default Values Key             | Set Values                                                                |
| ----------------- | ------------------------------------------------------------------ |
| country | TR |
| firstName | Ali |
| lastName | Karakoç |
| email |  mail@alikarakoc.com |
| developer | true |

## Meta.json

A data template that holds which fields will be contained in the form.

`controlType`, `'label,textinput,checkbox,dropdown'`

`order`, `'control order number'`

 


## Usage/Examples -> DropDown

```json
[
  {
    "controlType": "label",
    "order": 1,
    "text": "Ülkesi:"
  },
  {
    "key": "country",
    "options": [
      {
        "key": "TR",
        "value": "Türkiye"
      },
      {
        "key": "EN",
        "value": "İngiltere"
      },
      {
        "key": "RU",
        "value": "Rusya"
      }
    ],
    "order": 2,
    "controlType": "dropdown"
  }
]
```

## Usage/Examples -> TexInput

```json
[
  {
    "controlType": "label",
    "order": 1,
    "text": "Adı:"
  },
  {
    "controlType": "textinput",
    "key": "firstName",
    "required": true,
    "order": 2
  }
]
```


## Usage/Examples -> Checkbox

```json
[
  {
    "controlType": "checkbox",
    "key": "developer",
    "label": "Yazılımcı mı?",
    "order":1
  }
]
```

## Usage/Examples -> Label

```json
[
  {
    "controlType": "label",
    "text": "Adı:",
    "order":1
  }
]
```

