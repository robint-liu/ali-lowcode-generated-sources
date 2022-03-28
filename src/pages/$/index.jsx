import React from "react";

import {
  Page as NextPage,
  Block as NextBlock,
  BlockCell as NextBlockCell,
  RowColContainer as NextRowColContainer,
  Row as NextRow,
  Col as NextCol,
  P as NextP,
  PageHeader as NextPageHeader,
} from "@alifd/pro-layout";

import { Filter } from "@alifd/fusion-ui";

import { FormInput } from "@alifd/fusion-ui";

import { ProTable } from "@alifd/fusion-ui";

import { NextText } from "@alilc/lowcode-materials/lib/index.js";

import { createFetchHandler as __$$createFetchRequestHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { create as __$$createDataSourceEngine } from "@alilc/lowcode-datasource-engine/runtime";

import utils, { RefsManager } from "../../utils";

import { i18n as _$$i18n } from "../../i18n";

import "./index.css";

class $$Page extends React.Component {
  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    this.state = { text: "outer", isShowDialog: false };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: "fetch",
          isInit: function () {
            return true;
          },
          options: function () {
            return {
              params: {},
              method: "GET",
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: "mock/info.json",
            };
          },
          id: "info",
        },
      ],
    };
  }

  i18n = (i18nKey) => {
    return _$$i18n(i18nKey);
  };

  componentWillUnmount() {
    console.log("will unmount");
  }

  testFunc() {
    console.log("test func");
  }

  onClick() {
    this.setState({
      isShowDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log("did mount");
  }

  render() {
    const __$$context = this;
    const { state } = this;
    return (
      <div
        ref={this._refsManager.linkRef("outerView")}
        style={{ height: "100%" }}
      >
        <NextPage
          headerDivider={true}
          minHeight="100vh"
          presetNav={true}
          presetAside={true}
          footer={false}
          nav={false}
          aside={false}
          placeholderStyle={{ gridRowEnd: "span 1", gridColumnEnd: "span 12" }}
          headerProps={{ background: "surface" }}
          header={
            <NextPageHeader style={{ background: "#ffffff", padding: "" }}>
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1}>
                    <NextP
                      wrap={false}
                      type="body2"
                      verAlign="middle"
                      textSpacing={true}
                      align="left"
                    >
                      <NextText
                        type="h5"
                        mark={false}
                        code={false}
                        delete={false}
                        underline={false}
                        strong={false}
                      >
                        {this.state.info?.info}
                      </NextText>
                    </NextP>
                  </NextCol>
                </NextRow>
              </NextRowColContainer>
            </NextPageHeader>
          }
          isTab={false}
          contentAlignCenter={false}
          contentProps={{ style: { background: "rgba(255,255,255,0)" } }}
        >
          <NextBlock
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            rowGap={20}
            colGap={20}
            background="surface"
            layoutmode="O"
            strict={true}
            colSpan={12}
            rowSpan={1}
            mode="transparent"
            childTotalColumns={12}
          >
            <NextBlockCell
              colSpan={12}
              rowSpan={1}
              mode="procard"
              isAutoContainer={true}
              title="查询参数"
              hasDivider={true}
              loading={false}
              bodyPadding=""
              hasCollapse={false}
              text={true}
              visibleButtonCount={3}
              operations={[]}
            >
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1}>
                    <NextP
                      wrap={false}
                      type="body2"
                      verAlign="middle"
                      textSpacing={true}
                      align="left"
                    >
                      <Filter labelAlign="top">
                        <FormInput
                          formItemProps={{
                            primaryKey: "2284",
                            label: "表单项",
                            size: "medium",
                            device: "desktop",
                            fullWidth: true,
                          }}
                          placeholder="请输入"
                        />
                        <FormInput
                          formItemProps={{
                            primaryKey: "8802",
                            label: "表单项",
                            size: "medium",
                            device: "desktop",
                            fullWidth: true,
                          }}
                          placeholder="请输入"
                        />
                        <FormInput
                          formItemProps={{
                            primaryKey: "8323",
                            label: "表单项",
                            size: "medium",
                            device: "desktop",
                            fullWidth: true,
                          }}
                          placeholder="请输入"
                        />
                        <FormInput
                          formItemProps={{
                            primaryKey: "6770",
                            label: "表单项",
                            size: "medium",
                            device: "desktop",
                            fullWidth: true,
                          }}
                          placeholder="请输入"
                        />
                      </Filter>
                    </NextP>
                  </NextCol>
                </NextRow>
              </NextRowColContainer>
            </NextBlockCell>
          </NextBlock>
          <NextBlock
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            rowGap={20}
            colGap={20}
            background="surface"
            layoutmode="O"
            strict={true}
            colSpan={12}
            rowSpan={1}
            mode="transparent"
            childTotalColumns={12}
          >
            <NextBlockCell
              colSpan={12}
              rowSpan={1}
              mode="procard"
              isAutoContainer={true}
              title="表格数据"
              hasDivider={true}
              loading={false}
              bodyPadding=""
              hasCollapse={false}
              text={true}
              visibleButtonCount={3}
              operations={[]}
            >
              <NextRowColContainer rowGap={20} colGap={20}>
                <NextRow>
                  <NextCol colSpan={1}>
                    <NextP
                      wrap={false}
                      type="body2"
                      verAlign="middle"
                      textSpacing={true}
                      align="left"
                    >
                      <ProTable
                        isTree={true}
                        dataSource={[
                          {
                            id: "id-2f5DdE2b-0",
                            date: "2013-06-12",
                            percent: 1.862,
                            documentAmount: 2022,
                            currency: "CNY",
                            company: "支付宝科技有限公司",
                            children: [
                              {
                                id: "2f5DdE2b-5Aee-c43c-e1db-0-0",
                                date: "2013-06-12",
                                percent: 1.862,
                                documentAmount: 2022,
                                currency: "CNY",
                                company: "支付宝科技有限公司",
                              },
                              {
                                id: "2f5DdE2b-5Aee-c43c-e1db-0-1",
                                date: "2013-06-12",
                                percent: 1.862,
                                documentAmount: 2022,
                                currency: "CNY",
                                company: "支付宝科技有限公司",
                              },
                            ],
                          },
                          {
                            id: "id-2f5DdE2b-1",
                            date: "2013-06-12",
                            percent: 1.862,
                            documentAmount: 2022,
                            currency: "CNY",
                            company: "支付宝科技有限公司",
                            children: [
                              {
                                id: "2f5DdE2b-5Aee-c43c-e1db-1-0",
                                date: "2013-06-12",
                                percent: 1.862,
                                documentAmount: 2022,
                                currency: "CNY",
                                company: "支付宝科技有限公司",
                              },
                              {
                                id: "2f5DdE2b-5Aee-c43c-e1db-1-1",
                                date: "2013-06-12",
                                percent: 1.862,
                                documentAmount: 2022,
                                currency: "CNY",
                                company: "支付宝科技有限公司",
                              },
                            ],
                          },
                        ]}
                        columns={[
                          {
                            title: "公司",
                            dataIndex: "company",
                            width: 160,
                            formatType: "link",
                            searchable: true,
                          },
                          {
                            title: "单据金额",
                            dataIndex: "documentAmount",
                            formatType: "money",
                          },
                          {
                            title: "币种",
                            dataIndex: "currency",
                            formatType: "currency",
                            filters: [
                              { label: "CNY", value: "CNY" },
                              { label: "USD", value: "USD" },
                              { label: "JPY", value: "JPY" },
                              { label: "HKD", value: "HKD" },
                            ],
                            filterMode: "multiple",
                            explanation: "提示信息",
                            width: 110,
                          },
                          {
                            title: "完成进度",
                            dataIndex: "percent",
                            formatType: "progress",
                          },
                          {
                            title: "到账日期",
                            dataIndex: "date",
                            formatType: "date",
                          },
                        ]}
                      />
                    </NextP>
                  </NextCol>
                </NextRow>
              </NextRowColContainer>
            </NextBlockCell>
          </NextBlock>
        </NextPage>
      </div>
    );
  }
}

export default $$Page;

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
