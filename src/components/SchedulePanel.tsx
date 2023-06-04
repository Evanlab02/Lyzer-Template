import { Progress, ConfigProvider, theme } from 'antd';
import { green, blue } from '@ant-design/colors';

export default function SchedulePanel() {
    return (
        <div className='panel-grid'>
            <div className="panel">
                <h3>Is it race weekend?</h3>
                <div className="center">
                    <ConfigProvider
                        theme={{
                            algorithm: theme.darkAlgorithm,
                        }}
                    >
                        <Progress type="dashboard" percent={100} />
                    </ConfigProvider>
                </div>
            </div>
            <div className="panel">
                <h3>Weekend Progress</h3>
                <div className="center">
                    <ConfigProvider
                        theme={{
                            algorithm: theme.darkAlgorithm,
                        }}
                    >
                        <Progress
                            className='meh'
                            percent={60}
                            steps={5}
                            format={(percent) => { return "Practice 3 is on!" }}
                            strokeColor={[green[6], green[6], blue[5]]}
                        />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}