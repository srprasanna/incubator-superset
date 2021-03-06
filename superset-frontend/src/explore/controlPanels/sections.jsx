/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { t } from '@superset-ui/translation';
import { formatSelectOptions } from '../../modules/utils';

export const druidTimeSeries = {
  label: t('Time'),
  expanded: true,
  description: t('Time related form attributes'),
  controlSetRows: [['time_range']],
};

export const datasourceAndVizType = {
  label: t('Datasource & Chart Type'),
  expanded: true,
  controlSetRows: [
    ['datasource'],
    ['viz_type'],
    ['slice_id', 'cache_timeout', 'url_params', 'time_range_endpoints'],
  ],
};

export const colorScheme = {
  label: t('Color Scheme'),
  controlSetRows: [['color_scheme', 'label_colors']],
};

export const sqlaTimeSeries = {
  label: t('Time'),
  description: t('Time related form attributes'),
  expanded: true,
  controlSetRows: [['granularity_sqla'], ['time_range']],
};

export const annotations = {
  label: t('Annotations and Layers'),
  expanded: true,
  controlSetRows: [['annotation_layers']],
};

export const NVD3TimeSeries = [
  {
    label: t('Query'),
    expanded: true,
    controlSetRows: [
      ['metrics'],
      ['adhoc_filters'],
      ['groupby'],
      ['limit', 'timeseries_limit_metric'],
      ['order_desc', 'contribution'],
      ['row_limit', null],
    ],
  },
  {
    label: t('Advanced Analytics'),
    description: t(
      'This section contains options ' +
        'that allow for advanced analytical post processing ' +
        'of query results',
    ),
    controlSetRows: [
      [<h1 className="section-header">{t('Rolling Window')}</h1>],
      ['rolling_type', 'rolling_periods', 'min_periods'],
      [<h1 className="section-header">{t('Time Comparison')}</h1>],
      [
        {
          name: 'time_compare',
          config: {
            type: 'SelectControl',
            multi: true,
            freeForm: true,
            label: t('Time Shift'),
            choices: formatSelectOptions([
              '1 day',
              '1 week',
              '28 days',
              '30 days',
              '52 weeks',
              '1 year',
            ]),
            description: t(
              'Overlay one or more timeseries from a ' +
                'relative time period. Expects relative time deltas ' +
                'in natural language (example:  24 hours, 7 days, ' +
                '56 weeks, 365 days)',
            ),
          },
        },
        'comparison_type',
      ],
      [<h1 className="section-header">{t('Python Functions')}</h1>],
      [<h2 className="section-header">pandas.resample</h2>],
      [
        {
          name: 'resample_rule',
          config: {
            type: 'SelectControl',
            freeForm: true,
            label: t('Rule'),
            default: null,
            choices: formatSelectOptions(['1T', '1H', '1D', '7D', '1M', '1AS']),
            description: t('Pandas resample rule'),
          },
        },
        {
          name: 'resample_method',
          config: {
            type: 'SelectControl',
            freeForm: true,
            label: t('Method'),
            default: null,
            choices: formatSelectOptions([
              'asfreq',
              'bfill',
              'ffill',
              'median',
              'mean',
              'sum',
            ]),
            description: t('Pandas resample method'),
          },
        },
      ],
    ],
  },
];
