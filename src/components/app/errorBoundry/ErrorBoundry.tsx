import React, {Component, ErrorInfo, ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../Text';
import {View} from '../View';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };
  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text
            title="Something went wrong . /n Please exit and re launch app"
            style={styles.textStyles}
          />
        </View>
      );
    }
    return this.props.children;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 16,
  },
});

export default ErrorBoundary;
