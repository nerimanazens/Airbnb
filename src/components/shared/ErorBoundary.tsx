"use client";
import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
}

type ErrorBoundaryState = {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-red-500">Something went wrong.</p>;
    }
    return this.props.children;
  }
}