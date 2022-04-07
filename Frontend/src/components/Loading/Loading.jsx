import { Spin, Alert } from "antd";

const Loading = () => {
  return (
    <div className="loading">
      <Spin>
        <Alert
          message="Loading"
          description="Please wait while we are loading the page."
          type="info"
          showIcon
        />
      </Spin>
    </div>
  );
};

export default Loading;
